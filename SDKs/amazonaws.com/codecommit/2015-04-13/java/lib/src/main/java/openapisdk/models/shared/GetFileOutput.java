package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFileOutput {
    @JsonProperty("blobId")
    public String blobId;
    public GetFileOutput withBlobId(String blobId) {
        this.blobId = blobId;
        return this;
    }
    @JsonProperty("commitId")
    public String commitId;
    public GetFileOutput withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonProperty("fileContent")
    public String fileContent;
    public GetFileOutput withFileContent(String fileContent) {
        this.fileContent = fileContent;
        return this;
    }
    @JsonProperty("fileMode")
    public FileModeTypeEnumEnum fileMode;
    public GetFileOutput withFileMode(FileModeTypeEnumEnum fileMode) {
        this.fileMode = fileMode;
        return this;
    }
    @JsonProperty("filePath")
    public String filePath;
    public GetFileOutput withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
    @JsonProperty("fileSize")
    public Long fileSize;
    public GetFileOutput withFileSize(Long fileSize) {
        this.fileSize = fileSize;
        return this;
    }
}