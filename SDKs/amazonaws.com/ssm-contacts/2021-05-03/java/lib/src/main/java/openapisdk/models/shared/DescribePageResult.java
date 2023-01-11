package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribePageResult {
    @JsonProperty("ContactArn")
    public String contactArn;
    public DescribePageResult withContactArn(String contactArn) {
        this.contactArn = contactArn;
        return this;
    }
    @JsonProperty("Content")
    public String content;
    public DescribePageResult withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DeliveryTime")
    public OffsetDateTime deliveryTime;
    public DescribePageResult withDeliveryTime(OffsetDateTime deliveryTime) {
        this.deliveryTime = deliveryTime;
        return this;
    }
    @JsonProperty("EngagementArn")
    public String engagementArn;
    public DescribePageResult withEngagementArn(String engagementArn) {
        this.engagementArn = engagementArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncidentId")
    public String incidentId;
    public DescribePageResult withIncidentId(String incidentId) {
        this.incidentId = incidentId;
        return this;
    }
    @JsonProperty("PageArn")
    public String pageArn;
    public DescribePageResult withPageArn(String pageArn) {
        this.pageArn = pageArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicContent")
    public String publicContent;
    public DescribePageResult withPublicContent(String publicContent) {
        this.publicContent = publicContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicSubject")
    public String publicSubject;
    public DescribePageResult withPublicSubject(String publicSubject) {
        this.publicSubject = publicSubject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReadTime")
    public OffsetDateTime readTime;
    public DescribePageResult withReadTime(OffsetDateTime readTime) {
        this.readTime = readTime;
        return this;
    }
    @JsonProperty("Sender")
    public String sender;
    public DescribePageResult withSender(String sender) {
        this.sender = sender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SentTime")
    public OffsetDateTime sentTime;
    public DescribePageResult withSentTime(OffsetDateTime sentTime) {
        this.sentTime = sentTime;
        return this;
    }
    @JsonProperty("Subject")
    public String subject;
    public DescribePageResult withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}