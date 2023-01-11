package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRegistryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateRegistryResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistryArn")
    public String registryArn;
    public CreateRegistryResponse withRegistryArn(String registryArn) {
        this.registryArn = registryArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistryName")
    public String registryName;
    public CreateRegistryResponse withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateRegistryResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}