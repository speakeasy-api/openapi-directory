package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNotificationByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetNotificationByIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}