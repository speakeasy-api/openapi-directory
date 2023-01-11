package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNotificationByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public UpdateNotificationByIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}