package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutImageTagMutabilityRequest {
    @JsonProperty("imageTagMutability")
    public ImageTagMutabilityEnum imageTagMutability;
    public PutImageTagMutabilityRequest withImageTagMutability(ImageTagMutabilityEnum imageTagMutability) {
        this.imageTagMutability = imageTagMutability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public PutImageTagMutabilityRequest withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public PutImageTagMutabilityRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}