package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TrackingStatus {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("clickSynchronizationUtcDate")
    public OffsetDateTime clickSynchronizationUtcDate;
    public TrackingStatus withClickSynchronizationUtcDate(OffsetDateTime clickSynchronizationUtcDate) {
        this.clickSynchronizationUtcDate = clickSynchronizationUtcDate;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("marketplaceOrderSynchonizationUtcDate")
    public OffsetDateTime marketplaceOrderSynchonizationUtcDate;
    public TrackingStatus withMarketplaceOrderSynchonizationUtcDate(OffsetDateTime marketplaceOrderSynchonizationUtcDate) {
        this.marketplaceOrderSynchonizationUtcDate = marketplaceOrderSynchonizationUtcDate;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("orderSynchonizationUtcDate")
    public OffsetDateTime orderSynchonizationUtcDate;
    public TrackingStatus withOrderSynchonizationUtcDate(OffsetDateTime orderSynchonizationUtcDate) {
        this.orderSynchonizationUtcDate = orderSynchonizationUtcDate;
        return this;
    }
}