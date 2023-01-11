package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class FilesFilter {
    @SpeakeasyMetadata("queryParam:name=drive_id")
    public String driveId;
    public FilesFilter withDriveId(String driveId) {
        this.driveId = driveId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=folder_id")
    public String folderId;
    public FilesFilter withFolderId(String folderId) {
        this.folderId = folderId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=shared")
    public Boolean shared;
    public FilesFilter withShared(Boolean shared) {
        this.shared = shared;
        return this;
    }
}