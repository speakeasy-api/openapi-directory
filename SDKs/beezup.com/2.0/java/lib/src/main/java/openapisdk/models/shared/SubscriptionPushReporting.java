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
 * SubscriptionPushReporting
 * The subscription push reporting
**/
public class SubscriptionPushReporting {
    @JsonProperty("duration")
    public String duration;
    public SubscriptionPushReporting withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public ErrorResponseMessage errorMessage;
    public SubscriptionPushReporting withErrorMessage(ErrorResponseMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonProperty("eventId")
    public String eventId;
    public SubscriptionPushReporting withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpStatus")
    public Integer httpStatus;
    public SubscriptionPushReporting withHttpStatus(Integer httpStatus) {
        this.httpStatus = httpStatus;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastOrderModificationUtcDate")
    public OffsetDateTime lastOrderModificationUtcDate;
    public SubscriptionPushReporting withLastOrderModificationUtcDate(OffsetDateTime lastOrderModificationUtcDate) {
        this.lastOrderModificationUtcDate = lastOrderModificationUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRetryCount")
    public Long maxRetryCount;
    public SubscriptionPushReporting withMaxRetryCount(Long maxRetryCount) {
        this.maxRetryCount = maxRetryCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("nextScheduledRetryUtcDate")
    public OffsetDateTime nextScheduledRetryUtcDate;
    public SubscriptionPushReporting withNextScheduledRetryUtcDate(OffsetDateTime nextScheduledRetryUtcDate) {
        this.nextScheduledRetryUtcDate = nextScheduledRetryUtcDate;
        return this;
    }
    @JsonProperty("orderCount")
    public Integer orderCount;
    public SubscriptionPushReporting withOrderCount(Integer orderCount) {
        this.orderCount = orderCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestUri")
    public String requestUri;
    public SubscriptionPushReporting withRequestUri(String requestUri) {
        this.requestUri = requestUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseUri")
    public String responseUri;
    public SubscriptionPushReporting withResponseUri(String responseUri) {
        this.responseUri = responseUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryCount")
    public Long retryCount;
    public SubscriptionPushReporting withRetryCount(Long retryCount) {
        this.retryCount = retryCount;
        return this;
    }
    @JsonProperty("subscriptionId")
    public String subscriptionId;
    public SubscriptionPushReporting withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonProperty("succeed")
    public Boolean succeed;
    public SubscriptionPushReporting withSucceed(Boolean succeed) {
        this.succeed = succeed;
        return this;
    }
}