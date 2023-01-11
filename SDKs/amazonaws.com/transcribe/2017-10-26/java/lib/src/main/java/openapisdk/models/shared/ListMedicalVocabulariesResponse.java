package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMedicalVocabulariesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListMedicalVocabulariesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public VocabularyStateEnum status;
    public ListMedicalVocabulariesResponse withStatus(VocabularyStateEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Vocabularies")
    public VocabularyInfo[] vocabularies;
    public ListMedicalVocabulariesResponse withVocabularies(VocabularyInfo[] vocabularies) {
        this.vocabularies = vocabularies;
        return this;
    }
}