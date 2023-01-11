package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TargetContainerRepository
 * The container repository where the output container image is stored.
**/
public class TargetContainerRepository {
    @JsonProperty("repositoryName")
    public String repositoryName;
    public TargetContainerRepository withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonProperty("service")
    public ContainerRepositoryServiceEnum service;
    public TargetContainerRepository withService(ContainerRepositoryServiceEnum service) {
        this.service = service;
        return this;
    }
}