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
 * TopicRuleDestinationSummary
 * Information about the topic rule destination.
**/
public class TopicRuleDestinationSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public TopicRuleDestinationSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public TopicRuleDestinationSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpUrlSummary")
    public HttpUrlDestinationSummary httpUrlSummary;
    public TopicRuleDestinationSummary withHttpUrlSummary(HttpUrlDestinationSummary httpUrlSummary) {
        this.httpUrlSummary = httpUrlSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public TopicRuleDestinationSummary withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TopicRuleDestinationStatusEnum status;
    public TopicRuleDestinationSummary withStatus(TopicRuleDestinationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusReason")
    public String statusReason;
    public TopicRuleDestinationSummary withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcDestinationSummary")
    public VpcDestinationSummary vpcDestinationSummary;
    public TopicRuleDestinationSummary withVpcDestinationSummary(VpcDestinationSummary vpcDestinationSummary) {
        this.vpcDestinationSummary = vpcDestinationSummary;
        return this;
    }
}