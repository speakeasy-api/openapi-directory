package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateHostInput {
    @JsonProperty("Name")
    public String name;
    public CreateHostInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("ProviderEndpoint")
    public String providerEndpoint;
    public CreateHostInput withProviderEndpoint(String providerEndpoint) {
        this.providerEndpoint = providerEndpoint;
        return this;
    }
    @JsonProperty("ProviderType")
    public ProviderTypeEnum providerType;
    public CreateHostInput withProviderType(ProviderTypeEnum providerType) {
        this.providerType = providerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateHostInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfiguration")
    public VpcConfiguration vpcConfiguration;
    public CreateHostInput withVpcConfiguration(VpcConfiguration vpcConfiguration) {
        this.vpcConfiguration = vpcConfiguration;
        return this;
    }
}