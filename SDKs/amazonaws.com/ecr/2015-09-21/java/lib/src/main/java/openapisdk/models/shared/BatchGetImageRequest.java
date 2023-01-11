package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetImageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceptedMediaTypes")
    public String[] acceptedMediaTypes;
    public BatchGetImageRequest withAcceptedMediaTypes(String[] acceptedMediaTypes) {
        this.acceptedMediaTypes = acceptedMediaTypes;
        return this;
    }
    @JsonProperty("imageIds")
    public ImageIdentifier[] imageIds;
    public BatchGetImageRequest withImageIds(ImageIdentifier[] imageIds) {
        this.imageIds = imageIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public BatchGetImageRequest withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public BatchGetImageRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}