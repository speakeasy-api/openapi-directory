package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubModule
 * Returns information about a submodule reference in a repository folder.
**/
public class SubModule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("absolutePath")
    public String absolutePath;
    public SubModule withAbsolutePath(String absolutePath) {
        this.absolutePath = absolutePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitId")
    public String commitId;
    public SubModule withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relativePath")
    public String relativePath;
    public SubModule withRelativePath(String relativePath) {
        this.relativePath = relativePath;
        return this;
    }
}