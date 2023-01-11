package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteApplicationInputProcessingConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationARN")
    public String applicationARN;
    public DeleteApplicationInputProcessingConfigurationResponse withApplicationArn(String applicationARN) {
        this.applicationARN = applicationARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationVersionId")
    public Long applicationVersionId;
    public DeleteApplicationInputProcessingConfigurationResponse withApplicationVersionId(Long applicationVersionId) {
        this.applicationVersionId = applicationVersionId;
        return this;
    }
}