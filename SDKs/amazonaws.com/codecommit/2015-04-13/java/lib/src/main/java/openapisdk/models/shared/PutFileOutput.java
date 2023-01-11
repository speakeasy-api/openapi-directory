package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutFileOutput {
    @JsonProperty("blobId")
    public String blobId;
    public PutFileOutput withBlobId(String blobId) {
        this.blobId = blobId;
        return this;
    }
    @JsonProperty("commitId")
    public String commitId;
    public PutFileOutput withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonProperty("treeId")
    public String treeId;
    public PutFileOutput withTreeId(String treeId) {
        this.treeId = treeId;
        return this;
    }
}