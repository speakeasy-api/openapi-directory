package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddApplicationInputResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationARN")
    public String applicationARN;
    public AddApplicationInputResponse withApplicationArn(String applicationARN) {
        this.applicationARN = applicationARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationVersionId")
    public Long applicationVersionId;
    public AddApplicationInputResponse withApplicationVersionId(Long applicationVersionId) {
        this.applicationVersionId = applicationVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputDescriptions")
    public InputDescription[] inputDescriptions;
    public AddApplicationInputResponse withInputDescriptions(InputDescription[] inputDescriptions) {
        this.inputDescriptions = inputDescriptions;
        return this;
    }
}