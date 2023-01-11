package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveGroupsFilter {
    @SpeakeasyMetadata("queryParam:name=parent_group_id")
    public String parentGroupId;
    public DriveGroupsFilter withParentGroupId(String parentGroupId) {
        this.parentGroupId = parentGroupId;
        return this;
    }
}