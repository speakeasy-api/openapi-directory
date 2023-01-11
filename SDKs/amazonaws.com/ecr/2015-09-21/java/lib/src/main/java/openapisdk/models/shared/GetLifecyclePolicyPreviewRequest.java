package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLifecyclePolicyPreviewRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public LifecyclePolicyPreviewFilter filter;
    public GetLifecyclePolicyPreviewRequest withFilter(LifecyclePolicyPreviewFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageIds")
    public ImageIdentifier[] imageIds;
    public GetLifecyclePolicyPreviewRequest withImageIds(ImageIdentifier[] imageIds) {
        this.imageIds = imageIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public GetLifecyclePolicyPreviewRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetLifecyclePolicyPreviewRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registryId")
    public String registryId;
    public GetLifecyclePolicyPreviewRequest withRegistryId(String registryId) {
        this.registryId = registryId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public GetLifecyclePolicyPreviewRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}