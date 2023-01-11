package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartExperimentRequestBody {
    @JsonProperty("clientToken")
    public String clientToken;
    public StartExperimentRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("experimentTemplateId")
    public String experimentTemplateId;
    public StartExperimentRequestBody withExperimentTemplateId(String experimentTemplateId) {
        this.experimentTemplateId = experimentTemplateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public StartExperimentRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}