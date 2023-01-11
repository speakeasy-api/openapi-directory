package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishMessagesToChannelRequestsInput {
    @SpeakeasyMetadata("request:mediaType=application/x-msgpack")
    public byte[] applicationXMsgpack;
    public PublishMessagesToChannelRequestsInput withApplicationXMsgpack(byte[] applicationXMsgpack) {
        this.applicationXMsgpack = applicationXMsgpack;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MessageInput message;
    public PublishMessagesToChannelRequestsInput withMessage(openapisdk.models.shared.MessageInput message) {
        this.message = message;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.MessageInput message1;
    public PublishMessagesToChannelRequestsInput withMessage1(openapisdk.models.shared.MessageInput message1) {
        this.message1 = message1;
        return this;
    }
}