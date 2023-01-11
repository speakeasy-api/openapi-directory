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
 * Subscription
 * Information about the Shield Advanced subscription for an account.
**/
public class Subscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoRenew")
    public AutoRenewEnum autoRenew;
    public Subscription withAutoRenew(AutoRenewEnum autoRenew) {
        this.autoRenew = autoRenew;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public Subscription withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limits")
    public Limit[] limits;
    public Subscription withLimits(Limit[] limits) {
        this.limits = limits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProactiveEngagementStatus")
    public ProactiveEngagementStatusEnum proactiveEngagementStatus;
    public Subscription withProactiveEngagementStatus(ProactiveEngagementStatusEnum proactiveEngagementStatus) {
        this.proactiveEngagementStatus = proactiveEngagementStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public Subscription withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscriptionArn")
    public String subscriptionArn;
    public Subscription withSubscriptionArn(String subscriptionArn) {
        this.subscriptionArn = subscriptionArn;
        return this;
    }
    @JsonProperty("SubscriptionLimits")
    public SubscriptionLimits subscriptionLimits;
    public Subscription withSubscriptionLimits(SubscriptionLimits subscriptionLimits) {
        this.subscriptionLimits = subscriptionLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeCommitmentInSeconds")
    public Long timeCommitmentInSeconds;
    public Subscription withTimeCommitmentInSeconds(Long timeCommitmentInSeconds) {
        this.timeCommitmentInSeconds = timeCommitmentInSeconds;
        return this;
    }
}