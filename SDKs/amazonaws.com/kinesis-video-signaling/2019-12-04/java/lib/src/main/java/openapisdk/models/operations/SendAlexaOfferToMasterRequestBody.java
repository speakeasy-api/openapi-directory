package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendAlexaOfferToMasterRequestBody {
    @JsonProperty("ChannelARN")
    public String channelARN;
    public SendAlexaOfferToMasterRequestBody withChannelArn(String channelARN) {
        this.channelARN = channelARN;
        return this;
    }
    @JsonProperty("MessagePayload")
    public String messagePayload;
    public SendAlexaOfferToMasterRequestBody withMessagePayload(String messagePayload) {
        this.messagePayload = messagePayload;
        return this;
    }
    @JsonProperty("SenderClientId")
    public String senderClientId;
    public SendAlexaOfferToMasterRequestBody withSenderClientId(String senderClientId) {
        this.senderClientId = senderClientId;
        return this;
    }
}