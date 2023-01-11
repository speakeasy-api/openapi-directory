package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Message
 * The object that provides message text and it's type.
**/
public class Message {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customPayload")
    public CustomPayload customPayload;
    public Message withCustomPayload(CustomPayload customPayload) {
        this.customPayload = customPayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageResponseCard")
    public ImageResponseCard imageResponseCard;
    public Message withImageResponseCard(ImageResponseCard imageResponseCard) {
        this.imageResponseCard = imageResponseCard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plainTextMessage")
    public PlainTextMessage plainTextMessage;
    public Message withPlainTextMessage(PlainTextMessage plainTextMessage) {
        this.plainTextMessage = plainTextMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssmlMessage")
    public SsmlMessage ssmlMessage;
    public Message withSsmlMessage(SsmlMessage ssmlMessage) {
        this.ssmlMessage = ssmlMessage;
        return this;
    }
}