package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteApplicationVpcConfigurationRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public DeleteApplicationVpcConfigurationRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConditionalToken")
    public String conditionalToken;
    public DeleteApplicationVpcConfigurationRequest withConditionalToken(String conditionalToken) {
        this.conditionalToken = conditionalToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentApplicationVersionId")
    public Long currentApplicationVersionId;
    public DeleteApplicationVpcConfigurationRequest withCurrentApplicationVersionId(Long currentApplicationVersionId) {
        this.currentApplicationVersionId = currentApplicationVersionId;
        return this;
    }
    @JsonProperty("VpcConfigurationId")
    public String vpcConfigurationId;
    public DeleteApplicationVpcConfigurationRequest withVpcConfigurationId(String vpcConfigurationId) {
        this.vpcConfigurationId = vpcConfigurationId;
        return this;
    }
}