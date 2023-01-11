package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveGroupsOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DriveGroupsOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}