package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetBlobInput
 * Represents the input of a get blob operation.
**/
public class GetBlobInput {
    @JsonProperty("blobId")
    public String blobId;
    public GetBlobInput withBlobId(String blobId) {
        this.blobId = blobId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public GetBlobInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}