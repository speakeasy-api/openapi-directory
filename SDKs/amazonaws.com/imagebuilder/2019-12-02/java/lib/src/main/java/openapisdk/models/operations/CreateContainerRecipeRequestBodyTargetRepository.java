package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateContainerRecipeRequestBodyTargetRepository
 * The container repository where the output container image is stored.
**/
public class CreateContainerRecipeRequestBodyTargetRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public CreateContainerRecipeRequestBodyTargetRepository withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public openapisdk.models.shared.ContainerRepositoryServiceEnum service;
    public CreateContainerRecipeRequestBodyTargetRepository withService(openapisdk.models.shared.ContainerRepositoryServiceEnum service) {
        this.service = service;
        return this;
    }
}