package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUploadSessionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drive_id")
    public String driveId;
    public CreateUploadSessionRequest withDriveId(String driveId) {
        this.driveId = driveId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateUploadSessionRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("parent_folder_id")
    public String parentFolderId;
    public CreateUploadSessionRequest withParentFolderId(String parentFolderId) {
        this.parentFolderId = parentFolderId;
        return this;
    }
    @JsonProperty("size")
    public Long size;
    public CreateUploadSessionRequest withSize(Long size) {
        this.size = size;
        return this;
    }
}