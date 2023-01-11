package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteApplicationVpcConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationARN")
    public String applicationARN;
    public DeleteApplicationVpcConfigurationResponse withApplicationArn(String applicationARN) {
        this.applicationARN = applicationARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationVersionId")
    public Long applicationVersionId;
    public DeleteApplicationVpcConfigurationResponse withApplicationVersionId(Long applicationVersionId) {
        this.applicationVersionId = applicationVersionId;
        return this;
    }
}