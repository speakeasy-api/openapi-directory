package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddApplicationVpcConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationARN")
    public String applicationARN;
    public AddApplicationVpcConfigurationResponse withApplicationArn(String applicationARN) {
        this.applicationARN = applicationARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationVersionId")
    public Long applicationVersionId;
    public AddApplicationVpcConfigurationResponse withApplicationVersionId(Long applicationVersionId) {
        this.applicationVersionId = applicationVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfigurationDescription")
    public VpcConfigurationDescription vpcConfigurationDescription;
    public AddApplicationVpcConfigurationResponse withVpcConfigurationDescription(VpcConfigurationDescription vpcConfigurationDescription) {
        this.vpcConfigurationDescription = vpcConfigurationDescription;
        return this;
    }
}