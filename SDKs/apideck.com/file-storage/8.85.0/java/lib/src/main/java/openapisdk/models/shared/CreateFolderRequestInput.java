package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFolderRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateFolderRequestInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drive_id")
    public String driveId;
    public CreateFolderRequestInput withDriveId(String driveId) {
        this.driveId = driveId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateFolderRequestInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("parent_folder_id")
    public String parentFolderId;
    public CreateFolderRequestInput withParentFolderId(String parentFolderId) {
        this.parentFolderId = parentFolderId;
        return this;
    }
}