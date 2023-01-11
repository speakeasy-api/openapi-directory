package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Message {
    @JsonProperty("body")
    public Object body;
    public Message withBody(Object body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditCost")
    public Float creditCost;
    public Message withCreditCost(Float creditCost) {
        this.creditCost = creditCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encoding")
    public MessageEncodingEnum encoding;
    public Message withEncoding(MessageEncodingEnum encoding) {
        this.encoding = encoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public Message withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Message withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageClass")
    public Integer messageClass;
    public Message withMessageClass(Integer messageClass) {
        this.messageClass = messageClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfParts")
    public Integer numberOfParts;
    public Message withNumberOfParts(Integer numberOfParts) {
        this.numberOfParts = numberOfParts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocolId")
    public Integer protocolId;
    public Message withProtocolId(Integer protocolId) {
        this.protocolId = protocolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedSentMessageId")
    public String relatedSentMessageId;
    public Message withRelatedSentMessageId(String relatedSentMessageId) {
        this.relatedSentMessageId = relatedSentMessageId;
        return this;
    }
    @JsonProperty("status")
    public MessageStatus status;
    public Message withStatus(MessageStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submission")
    public MessageSubmission submission;
    public Message withSubmission(MessageSubmission submission) {
        this.submission = submission;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public Message withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonProperty("type")
    public MessageTypeEnum type;
    public Message withType(MessageTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userSuppliedId")
    public String userSuppliedId;
    public Message withUserSuppliedId(String userSuppliedId) {
        this.userSuppliedId = userSuppliedId;
        return this;
    }
}