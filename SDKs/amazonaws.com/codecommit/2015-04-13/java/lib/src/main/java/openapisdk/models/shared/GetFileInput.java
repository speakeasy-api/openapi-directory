package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFileInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitSpecifier")
    public String commitSpecifier;
    public GetFileInput withCommitSpecifier(String commitSpecifier) {
        this.commitSpecifier = commitSpecifier;
        return this;
    }
    @JsonProperty("filePath")
    public String filePath;
    public GetFileInput withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public GetFileInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}