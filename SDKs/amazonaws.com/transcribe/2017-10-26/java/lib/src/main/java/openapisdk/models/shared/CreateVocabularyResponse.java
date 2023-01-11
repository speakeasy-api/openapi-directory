package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateVocabularyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureReason")
    public String failureReason;
    public CreateVocabularyResponse withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public LanguageCodeEnum languageCode;
    public CreateVocabularyResponse withLanguageCode(LanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedTime")
    public OffsetDateTime lastModifiedTime;
    public CreateVocabularyResponse withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VocabularyName")
    public String vocabularyName;
    public CreateVocabularyResponse withVocabularyName(String vocabularyName) {
        this.vocabularyName = vocabularyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VocabularyState")
    public VocabularyStateEnum vocabularyState;
    public CreateVocabularyResponse withVocabularyState(VocabularyStateEnum vocabularyState) {
        this.vocabularyState = vocabularyState;
        return this;
    }
}