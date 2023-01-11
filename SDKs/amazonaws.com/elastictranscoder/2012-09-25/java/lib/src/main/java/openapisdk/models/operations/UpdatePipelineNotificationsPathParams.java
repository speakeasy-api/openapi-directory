package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePipelineNotificationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public UpdatePipelineNotificationsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}