package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutFileInput {
    @JsonProperty("branchName")
    public String branchName;
    public PutFileInput withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitMessage")
    public String commitMessage;
    public PutFileInput withCommitMessage(String commitMessage) {
        this.commitMessage = commitMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PutFileInput withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("fileContent")
    public String fileContent;
    public PutFileInput withFileContent(String fileContent) {
        this.fileContent = fileContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileMode")
    public FileModeTypeEnumEnum fileMode;
    public PutFileInput withFileMode(FileModeTypeEnumEnum fileMode) {
        this.fileMode = fileMode;
        return this;
    }
    @JsonProperty("filePath")
    public String filePath;
    public PutFileInput withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PutFileInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentCommitId")
    public String parentCommitId;
    public PutFileInput withParentCommitId(String parentCommitId) {
        this.parentCommitId = parentCommitId;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public PutFileInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}