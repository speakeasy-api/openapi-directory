package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivesFilter {
    @SpeakeasyMetadata("queryParam:name=group_id")
    public String groupId;
    public DrivesFilter withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}