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
 * TopicRuleDestination
 * A topic rule destination.
**/
public class TopicRuleDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public TopicRuleDestination withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public TopicRuleDestination withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpUrlProperties")
    public HttpUrlDestinationProperties httpUrlProperties;
    public TopicRuleDestination withHttpUrlProperties(HttpUrlDestinationProperties httpUrlProperties) {
        this.httpUrlProperties = httpUrlProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public TopicRuleDestination withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TopicRuleDestinationStatusEnum status;
    public TopicRuleDestination withStatus(TopicRuleDestinationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusReason")
    public String statusReason;
    public TopicRuleDestination withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcProperties")
    public VpcDestinationProperties vpcProperties;
    public TopicRuleDestination withVpcProperties(VpcDestinationProperties vpcProperties) {
        this.vpcProperties = vpcProperties;
        return this;
    }
}