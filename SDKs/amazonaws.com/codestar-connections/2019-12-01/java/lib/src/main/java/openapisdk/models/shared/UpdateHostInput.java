package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateHostInput {
    @JsonProperty("HostArn")
    public String hostArn;
    public UpdateHostInput withHostArn(String hostArn) {
        this.hostArn = hostArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderEndpoint")
    public String providerEndpoint;
    public UpdateHostInput withProviderEndpoint(String providerEndpoint) {
        this.providerEndpoint = providerEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfiguration")
    public VpcConfiguration vpcConfiguration;
    public UpdateHostInput withVpcConfiguration(VpcConfiguration vpcConfiguration) {
        this.vpcConfiguration = vpcConfiguration;
        return this;
    }
}