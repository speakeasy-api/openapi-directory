package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGroupsIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=admin_ids")
    public String adminIds;
    public PatchGroupsIdRequestBody withAdminIds(String adminIds) {
        this.adminIds = adminIds;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PatchGroupsIdRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=notes")
    public String notes;
    public PatchGroupsIdRequestBody withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_ids")
    public String userIds;
    public PatchGroupsIdRequestBody withUserIds(String userIds) {
        this.userIds = userIds;
        return this;
    }
}