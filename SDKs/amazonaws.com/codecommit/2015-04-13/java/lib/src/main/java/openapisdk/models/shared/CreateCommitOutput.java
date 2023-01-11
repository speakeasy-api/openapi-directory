package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCommitOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitId")
    public String commitId;
    public CreateCommitOutput withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filesAdded")
    public FileMetadata[] filesAdded;
    public CreateCommitOutput withFilesAdded(FileMetadata[] filesAdded) {
        this.filesAdded = filesAdded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filesDeleted")
    public FileMetadata[] filesDeleted;
    public CreateCommitOutput withFilesDeleted(FileMetadata[] filesDeleted) {
        this.filesDeleted = filesDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filesUpdated")
    public FileMetadata[] filesUpdated;
    public CreateCommitOutput withFilesUpdated(FileMetadata[] filesUpdated) {
        this.filesUpdated = filesUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treeId")
    public String treeId;
    public CreateCommitOutput withTreeId(String treeId) {
        this.treeId = treeId;
        return this;
    }
}