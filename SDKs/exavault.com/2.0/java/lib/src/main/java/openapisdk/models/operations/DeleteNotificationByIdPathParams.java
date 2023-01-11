package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNotificationByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteNotificationByIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}