package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Folder
 * Returns information about a folder in a repository.
**/
public class Folder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("absolutePath")
    public String absolutePath;
    public Folder withAbsolutePath(String absolutePath) {
        this.absolutePath = absolutePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relativePath")
    public String relativePath;
    public Folder withRelativePath(String relativePath) {
        this.relativePath = relativePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treeId")
    public String treeId;
    public Folder withTreeId(String treeId) {
        this.treeId = treeId;
        return this;
    }
}