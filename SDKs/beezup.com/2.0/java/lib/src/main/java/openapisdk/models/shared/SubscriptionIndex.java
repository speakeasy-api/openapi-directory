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
 * SubscriptionIndex
 * The subscription definition
**/
public class SubscriptionIndex {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumerHealthStatus")
    public ConsumptionAvailabilityStatusEnum consumerHealthStatus;
    public SubscriptionIndex withConsumerHealthStatus(ConsumptionAvailabilityStatusEnum consumerHealthStatus) {
        this.consumerHealthStatus = consumerHealthStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumerLastRequestSentUri")
    public String consumerLastRequestSentUri;
    public SubscriptionIndex withConsumerLastRequestSentUri(String consumerLastRequestSentUri) {
        this.consumerLastRequestSentUri = consumerLastRequestSentUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("consumerUnvailableSinceUtcDate")
    public OffsetDateTime consumerUnvailableSinceUtcDate;
    public SubscriptionIndex withConsumerUnvailableSinceUtcDate(OffsetDateTime consumerUnvailableSinceUtcDate) {
        this.consumerUnvailableSinceUtcDate = consumerUnvailableSinceUtcDate;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public SubscriptionIndex withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastErrorMessage")
    public ErrorResponseMessage lastErrorMessage;
    public SubscriptionIndex withLastErrorMessage(ErrorResponseMessage lastErrorMessage) {
        this.lastErrorMessage = lastErrorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastOrderPushedModificationUtcDate")
    public OffsetDateTime lastOrderPushedModificationUtcDate;
    public SubscriptionIndex withLastOrderPushedModificationUtcDate(OffsetDateTime lastOrderPushedModificationUtcDate) {
        this.lastOrderPushedModificationUtcDate = lastOrderPushedModificationUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastRetryUtcDate")
    public OffsetDateTime lastRetryUtcDate;
    public SubscriptionIndex withLastRetryUtcDate(OffsetDateTime lastRetryUtcDate) {
        this.lastRetryUtcDate = lastRetryUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastSuccessfulOrderPushedUtcDate")
    public OffsetDateTime lastSuccessfulOrderPushedUtcDate;
    public SubscriptionIndex withLastSuccessfulOrderPushedUtcDate(OffsetDateTime lastSuccessfulOrderPushedUtcDate) {
        this.lastSuccessfulOrderPushedUtcDate = lastSuccessfulOrderPushedUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public SubscriptionLinks links;
    public SubscriptionIndex withLinks(SubscriptionLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRetryCount")
    public Long maxRetryCount;
    public SubscriptionIndex withMaxRetryCount(Long maxRetryCount) {
        this.maxRetryCount = maxRetryCount;
        return this;
    }
    @JsonProperty("merchantApplicationName")
    public String merchantApplicationName;
    public SubscriptionIndex withMerchantApplicationName(String merchantApplicationName) {
        this.merchantApplicationName = merchantApplicationName;
        return this;
    }
    @JsonProperty("merchantApplicationVersion")
    public String merchantApplicationVersion;
    public SubscriptionIndex withMerchantApplicationVersion(String merchantApplicationVersion) {
        this.merchantApplicationVersion = merchantApplicationVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantEmailAlert")
    public String merchantEmailAlert;
    public SubscriptionIndex withMerchantEmailAlert(String merchantEmailAlert) {
        this.merchantEmailAlert = merchantEmailAlert;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public SubscriptionIndex withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("nextScheduledRetryUtcDate")
    public OffsetDateTime nextScheduledRetryUtcDate;
    public SubscriptionIndex withNextScheduledRetryUtcDate(OffsetDateTime nextScheduledRetryUtcDate) {
        this.nextScheduledRetryUtcDate = nextScheduledRetryUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("recoverBeginPeriodOrderLastModificationUtcDate")
    public OffsetDateTime recoverBeginPeriodOrderLastModificationUtcDate;
    public SubscriptionIndex withRecoverBeginPeriodOrderLastModificationUtcDate(OffsetDateTime recoverBeginPeriodOrderLastModificationUtcDate) {
        this.recoverBeginPeriodOrderLastModificationUtcDate = recoverBeginPeriodOrderLastModificationUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("recoverEndPeriodOrderLastModificationUtcDate")
    public OffsetDateTime recoverEndPeriodOrderLastModificationUtcDate;
    public SubscriptionIndex withRecoverEndPeriodOrderLastModificationUtcDate(OffsetDateTime recoverEndPeriodOrderLastModificationUtcDate) {
        this.recoverEndPeriodOrderLastModificationUtcDate = recoverEndPeriodOrderLastModificationUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryCount")
    public Long retryCount;
    public SubscriptionIndex withRetryCount(Long retryCount) {
        this.retryCount = retryCount;
        return this;
    }
    @JsonProperty("status")
    public SubscriptionStatusEnum status;
    public SubscriptionIndex withStatus(SubscriptionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("targetUrl")
    public String targetUrl;
    public SubscriptionIndex withTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
        return this;
    }
}