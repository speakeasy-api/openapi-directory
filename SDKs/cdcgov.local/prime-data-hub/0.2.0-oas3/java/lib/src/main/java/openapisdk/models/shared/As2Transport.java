package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * As2Transport
 * Describes a single AS2 connection in all of it variations
**/
public class As2Transport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDescription")
    public String contentDescription;
    public As2Transport withContentDescription(String contentDescription) {
        this.contentDescription = contentDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public As2Transport withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonProperty("receiverId")
    public String receiverId;
    public As2Transport withReceiverId(String receiverId) {
        this.receiverId = receiverId;
        return this;
    }
    @JsonProperty("receiverUrl")
    public String receiverUrl;
    public As2Transport withReceiverUrl(String receiverUrl) {
        this.receiverUrl = receiverUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senderEmail")
    public String senderEmail;
    public As2Transport withSenderEmail(String senderEmail) {
        this.senderEmail = senderEmail;
        return this;
    }
    @JsonProperty("senderId")
    public String senderId;
    public As2Transport withSenderId(String senderId) {
        this.senderId = senderId;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public As2Transport withType(String type) {
        this.type = type;
        return this;
    }
}