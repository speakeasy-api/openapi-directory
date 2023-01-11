package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateContainerServiceRegistryLoginResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryLogin")
    public ContainerServiceRegistryLogin registryLogin;
    public CreateContainerServiceRegistryLoginResult withRegistryLogin(ContainerServiceRegistryLogin registryLogin) {
        this.registryLogin = registryLogin;
        return this;
    }
}