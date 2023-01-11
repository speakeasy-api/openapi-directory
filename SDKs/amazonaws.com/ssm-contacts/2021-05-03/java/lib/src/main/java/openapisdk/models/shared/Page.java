package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Page
 * Incident Manager engaging a contact's contact channel.
**/
public class Page {
    @JsonProperty("ContactArn")
    public String contactArn;
    public Page withContactArn(String contactArn) {
        this.contactArn = contactArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DeliveryTime")
    public OffsetDateTime deliveryTime;
    public Page withDeliveryTime(OffsetDateTime deliveryTime) {
        this.deliveryTime = deliveryTime;
        return this;
    }
    @JsonProperty("EngagementArn")
    public String engagementArn;
    public Page withEngagementArn(String engagementArn) {
        this.engagementArn = engagementArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncidentId")
    public String incidentId;
    public Page withIncidentId(String incidentId) {
        this.incidentId = incidentId;
        return this;
    }
    @JsonProperty("PageArn")
    public String pageArn;
    public Page withPageArn(String pageArn) {
        this.pageArn = pageArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReadTime")
    public OffsetDateTime readTime;
    public Page withReadTime(OffsetDateTime readTime) {
        this.readTime = readTime;
        return this;
    }
    @JsonProperty("Sender")
    public String sender;
    public Page withSender(String sender) {
        this.sender = sender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SentTime")
    public OffsetDateTime sentTime;
    public Page withSentTime(OffsetDateTime sentTime) {
        this.sentTime = sentTime;
        return this;
    }
}