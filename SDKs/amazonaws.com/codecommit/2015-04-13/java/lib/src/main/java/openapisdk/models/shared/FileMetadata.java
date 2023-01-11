package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileMetadata
 * A file to be added, updated, or deleted as part of a commit.
**/
public class FileMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("absolutePath")
    public String absolutePath;
    public FileMetadata withAbsolutePath(String absolutePath) {
        this.absolutePath = absolutePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobId")
    public String blobId;
    public FileMetadata withBlobId(String blobId) {
        this.blobId = blobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileMode")
    public FileModeTypeEnumEnum fileMode;
    public FileMetadata withFileMode(FileModeTypeEnumEnum fileMode) {
        this.fileMode = fileMode;
        return this;
    }
}