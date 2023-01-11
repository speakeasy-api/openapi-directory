package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveGroupsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DriveGroupsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}