package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRawMessageContentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=messageId")
    public String messageId;
    public GetRawMessageContentPathParams withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}