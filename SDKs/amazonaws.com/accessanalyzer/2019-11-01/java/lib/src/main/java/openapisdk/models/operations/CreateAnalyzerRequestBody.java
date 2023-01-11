package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAnalyzerRequestBody {
    @JsonProperty("analyzerName")
    public String analyzerName;
    public CreateAnalyzerRequestBody withAnalyzerName(String analyzerName) {
        this.analyzerName = analyzerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archiveRules")
    public openapisdk.models.shared.InlineArchiveRule[] archiveRules;
    public CreateAnalyzerRequestBody withArchiveRules(openapisdk.models.shared.InlineArchiveRule[] archiveRules) {
        this.archiveRules = archiveRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateAnalyzerRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateAnalyzerRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public CreateAnalyzerRequestBodyTypeEnum type;
    public CreateAnalyzerRequestBody withType(CreateAnalyzerRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}