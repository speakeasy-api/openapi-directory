package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDockerCredentials200ApplicationJsonAuths {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registry.digitalocean.com")
    public GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom registryDigitaloceanCom;
    public GetDockerCredentials200ApplicationJsonAuths withRegistryDigitaloceanCom(GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom registryDigitaloceanCom) {
        this.registryDigitaloceanCom = registryDigitaloceanCom;
        return this;
    }
}