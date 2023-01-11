package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendMessagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public SendMessagesPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}