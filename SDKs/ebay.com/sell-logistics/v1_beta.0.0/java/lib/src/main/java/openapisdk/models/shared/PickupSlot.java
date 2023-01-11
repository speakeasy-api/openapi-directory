package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PickupSlot
 * This complex type defines a time window for the pickup of a package.
**/
public class PickupSlot {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupSlotEndTime")
    public String pickupSlotEndTime;
    public PickupSlot withPickupSlotEndTime(String pickupSlotEndTime) {
        this.pickupSlotEndTime = pickupSlotEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupSlotId")
    public String pickupSlotId;
    public PickupSlot withPickupSlotId(String pickupSlotId) {
        this.pickupSlotId = pickupSlotId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupSlotStartTime")
    public String pickupSlotStartTime;
    public PickupSlot withPickupSlotStartTime(String pickupSlotStartTime) {
        this.pickupSlotStartTime = pickupSlotStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupSlotTimeZone")
    public String pickupSlotTimeZone;
    public PickupSlot withPickupSlotTimeZone(String pickupSlotTimeZone) {
        this.pickupSlotTimeZone = pickupSlotTimeZone;
        return this;
    }
}