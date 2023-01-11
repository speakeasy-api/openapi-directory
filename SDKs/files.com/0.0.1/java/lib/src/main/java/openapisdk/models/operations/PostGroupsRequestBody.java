package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGroupsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=admin_ids")
    public String adminIds;
    public PostGroupsRequestBody withAdminIds(String adminIds) {
        this.adminIds = adminIds;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PostGroupsRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=notes")
    public String notes;
    public PostGroupsRequestBody withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_ids")
    public String userIds;
    public PostGroupsRequestBody withUserIds(String userIds) {
        this.userIds = userIds;
        return this;
    }
}