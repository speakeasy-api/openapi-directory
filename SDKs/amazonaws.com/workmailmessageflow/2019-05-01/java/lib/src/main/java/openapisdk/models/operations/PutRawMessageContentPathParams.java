package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRawMessageContentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=messageId")
    public String messageId;
    public PutRawMessageContentPathParams withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}