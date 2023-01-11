package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFileOutput {
    @JsonProperty("blobId")
    public String blobId;
    public DeleteFileOutput withBlobId(String blobId) {
        this.blobId = blobId;
        return this;
    }
    @JsonProperty("commitId")
    public String commitId;
    public DeleteFileOutput withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonProperty("filePath")
    public String filePath;
    public DeleteFileOutput withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
    @JsonProperty("treeId")
    public String treeId;
    public DeleteFileOutput withTreeId(String treeId) {
        this.treeId = treeId;
        return this;
    }
}