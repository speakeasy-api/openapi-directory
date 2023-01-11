package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegistryId
 * A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).
**/
public class RegistryId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistryArn")
    public String registryArn;
    public RegistryId withRegistryArn(String registryArn) {
        this.registryArn = registryArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistryName")
    public String registryName;
    public RegistryId withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
}