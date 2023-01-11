package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteRegistryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistryArn")
    public String registryArn;
    public DeleteRegistryResponse withRegistryArn(String registryArn) {
        this.registryArn = registryArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistryName")
    public String registryName;
    public DeleteRegistryResponse withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public RegistryStatusEnum status;
    public DeleteRegistryResponse withStatus(RegistryStatusEnum status) {
        this.status = status;
        return this;
    }
}