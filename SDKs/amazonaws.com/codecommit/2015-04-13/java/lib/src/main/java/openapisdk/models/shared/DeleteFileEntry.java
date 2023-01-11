package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteFileEntry
 * A file that is deleted as part of a commit.
**/
public class DeleteFileEntry {
    @JsonProperty("filePath")
    public String filePath;
    public DeleteFileEntry withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
}