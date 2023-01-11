package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeEngagementResult {
    @JsonProperty("ContactArn")
    public String contactArn;
    public DescribeEngagementResult withContactArn(String contactArn) {
        this.contactArn = contactArn;
        return this;
    }
    @JsonProperty("Content")
    public String content;
    public DescribeEngagementResult withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonProperty("EngagementArn")
    public String engagementArn;
    public DescribeEngagementResult withEngagementArn(String engagementArn) {
        this.engagementArn = engagementArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncidentId")
    public String incidentId;
    public DescribeEngagementResult withIncidentId(String incidentId) {
        this.incidentId = incidentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicContent")
    public String publicContent;
    public DescribeEngagementResult withPublicContent(String publicContent) {
        this.publicContent = publicContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicSubject")
    public String publicSubject;
    public DescribeEngagementResult withPublicSubject(String publicSubject) {
        this.publicSubject = publicSubject;
        return this;
    }
    @JsonProperty("Sender")
    public String sender;
    public DescribeEngagementResult withSender(String sender) {
        this.sender = sender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public DescribeEngagementResult withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StopTime")
    public OffsetDateTime stopTime;
    public DescribeEngagementResult withStopTime(OffsetDateTime stopTime) {
        this.stopTime = stopTime;
        return this;
    }
    @JsonProperty("Subject")
    public String subject;
    public DescribeEngagementResult withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}