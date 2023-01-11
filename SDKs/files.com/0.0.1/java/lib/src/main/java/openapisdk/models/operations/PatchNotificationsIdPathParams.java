package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchNotificationsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PatchNotificationsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}