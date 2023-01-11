package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRegistryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistryArn")
    public String registryArn;
    public UpdateRegistryResponse withRegistryArn(String registryArn) {
        this.registryArn = registryArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistryName")
    public String registryName;
    public UpdateRegistryResponse withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
}