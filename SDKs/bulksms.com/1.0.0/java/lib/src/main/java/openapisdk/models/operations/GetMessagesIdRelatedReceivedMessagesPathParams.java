package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMessagesIdRelatedReceivedMessagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetMessagesIdRelatedReceivedMessagesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}