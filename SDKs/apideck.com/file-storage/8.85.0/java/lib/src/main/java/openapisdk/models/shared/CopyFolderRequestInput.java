package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CopyFolderRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CopyFolderRequestInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("parent_folder_id")
    public String parentFolderId;
    public CopyFolderRequestInput withParentFolderId(String parentFolderId) {
        this.parentFolderId = parentFolderId;
        return this;
    }
}