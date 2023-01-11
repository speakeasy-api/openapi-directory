package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StoreTrackingStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("clickSynchronizationUtcDate")
    public OffsetDateTime clickSynchronizationUtcDate;
    public StoreTrackingStatus withClickSynchronizationUtcDate(OffsetDateTime clickSynchronizationUtcDate) {
        this.clickSynchronizationUtcDate = clickSynchronizationUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("marketplaceOrderSynchonizationUtcDate")
    public OffsetDateTime marketplaceOrderSynchonizationUtcDate;
    public StoreTrackingStatus withMarketplaceOrderSynchonizationUtcDate(OffsetDateTime marketplaceOrderSynchonizationUtcDate) {
        this.marketplaceOrderSynchonizationUtcDate = marketplaceOrderSynchonizationUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("orderSynchonizationUtcDate")
    public OffsetDateTime orderSynchonizationUtcDate;
    public StoreTrackingStatus withOrderSynchonizationUtcDate(OffsetDateTime orderSynchonizationUtcDate) {
        this.orderSynchonizationUtcDate = orderSynchonizationUtcDate;
        return this;
    }
}