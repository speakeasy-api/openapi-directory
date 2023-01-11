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
 * OrderFulfillmentsPickupDetailsCurbsidePickupDetails
 * Specific details for curbside pickup.
**/
public class OrderFulfillmentsPickupDetailsCurbsidePickupDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("buyer_arrived_at")
    public OffsetDateTime buyerArrivedAt;
    public OrderFulfillmentsPickupDetailsCurbsidePickupDetails withBuyerArrivedAt(OffsetDateTime buyerArrivedAt) {
        this.buyerArrivedAt = buyerArrivedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("curbside_details")
    public String curbsideDetails;
    public OrderFulfillmentsPickupDetailsCurbsidePickupDetails withCurbsideDetails(String curbsideDetails) {
        this.curbsideDetails = curbsideDetails;
        return this;
    }
}