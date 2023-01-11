package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubmissionEntry
 * An object that you use when posting messages.
**/
public class SubmissionEntry {
    @JsonProperty("body")
    public String body;
    public SubmissionEntry withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryReports")
    public SubmissionEntryDeliveryReportsEnum deliveryReports;
    public SubmissionEntry withDeliveryReports(SubmissionEntryDeliveryReportsEnum deliveryReports) {
        this.deliveryReports = deliveryReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encoding")
    public SubmissionEntryEncodingEnum encoding;
    public SubmissionEntry withEncoding(SubmissionEntryEncodingEnum encoding) {
        this.encoding = encoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public SubmissionEntryFrom from;
    public SubmissionEntry withFrom(SubmissionEntryFrom from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longMessageMaxParts")
    public Integer longMessageMaxParts;
    public SubmissionEntry withLongMessageMaxParts(Integer longMessageMaxParts) {
        this.longMessageMaxParts = longMessageMaxParts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageClass")
    public SubmissionEntryMessageClassEnum messageClass;
    public SubmissionEntry withMessageClass(SubmissionEntryMessageClassEnum messageClass) {
        this.messageClass = messageClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocolId")
    public SubmissionEntryProtocolIdEnum protocolId;
    public SubmissionEntry withProtocolId(SubmissionEntryProtocolIdEnum protocolId) {
        this.protocolId = protocolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingGroup")
    public SubmissionEntryRoutingGroupEnum routingGroup;
    public SubmissionEntry withRoutingGroup(SubmissionEntryRoutingGroupEnum routingGroup) {
        this.routingGroup = routingGroup;
        return this;
    }
    @JsonProperty("to")
    public SubmissionEntryTo[] to;
    public SubmissionEntry withTo(SubmissionEntryTo[] to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userSuppliedId")
    public String userSuppliedId;
    public SubmissionEntry withUserSuppliedId(String userSuppliedId) {
        this.userSuppliedId = userSuppliedId;
        return this;
    }
}