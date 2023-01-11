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
 * Engagement
 * Incident Manager reaching out to a contact or escalation plan to engage contact during an incident.
**/
public class Engagement {
    @JsonProperty("ContactArn")
    public String contactArn;
    public Engagement withContactArn(String contactArn) {
        this.contactArn = contactArn;
        return this;
    }
    @JsonProperty("EngagementArn")
    public String engagementArn;
    public Engagement withEngagementArn(String engagementArn) {
        this.engagementArn = engagementArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncidentId")
    public String incidentId;
    public Engagement withIncidentId(String incidentId) {
        this.incidentId = incidentId;
        return this;
    }
    @JsonProperty("Sender")
    public String sender;
    public Engagement withSender(String sender) {
        this.sender = sender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public Engagement withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StopTime")
    public OffsetDateTime stopTime;
    public Engagement withStopTime(OffsetDateTime stopTime) {
        this.stopTime = stopTime;
        return this;
    }
}