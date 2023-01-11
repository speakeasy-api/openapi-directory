package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddApplicationVpcConfigurationRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public AddApplicationVpcConfigurationRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConditionalToken")
    public String conditionalToken;
    public AddApplicationVpcConfigurationRequest withConditionalToken(String conditionalToken) {
        this.conditionalToken = conditionalToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentApplicationVersionId")
    public Long currentApplicationVersionId;
    public AddApplicationVpcConfigurationRequest withCurrentApplicationVersionId(Long currentApplicationVersionId) {
        this.currentApplicationVersionId = currentApplicationVersionId;
        return this;
    }
    @JsonProperty("VpcConfiguration")
    public VpcConfiguration vpcConfiguration;
    public AddApplicationVpcConfigurationRequest withVpcConfiguration(VpcConfiguration vpcConfiguration) {
        this.vpcConfiguration = vpcConfiguration;
        return this;
    }
}