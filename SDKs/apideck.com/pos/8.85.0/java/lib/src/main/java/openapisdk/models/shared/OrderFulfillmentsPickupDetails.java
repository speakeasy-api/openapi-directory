package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class OrderFulfillmentsPickupDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("accepted_at")
    public OffsetDateTime acceptedAt;
    public OrderFulfillmentsPickupDetails withAcceptedAt(OffsetDateTime acceptedAt) {
        this.acceptedAt = acceptedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_complete_duration")
    public String autoCompleteDuration;
    public OrderFulfillmentsPickupDetails withAutoCompleteDuration(String autoCompleteDuration) {
        this.autoCompleteDuration = autoCompleteDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancel_reason")
    public String cancelReason;
    public OrderFulfillmentsPickupDetails withCancelReason(String cancelReason) {
        this.cancelReason = cancelReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("canceled_at")
    public OffsetDateTime canceledAt;
    public OrderFulfillmentsPickupDetails withCanceledAt(OffsetDateTime canceledAt) {
        this.canceledAt = canceledAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("curbside_pickup_details")
    public OrderFulfillmentsPickupDetailsCurbsidePickupDetails curbsidePickupDetails;
    public OrderFulfillmentsPickupDetails withCurbsidePickupDetails(OrderFulfillmentsPickupDetailsCurbsidePickupDetails curbsidePickupDetails) {
        this.curbsidePickupDetails = curbsidePickupDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expired_at")
    public OffsetDateTime expiredAt;
    public OrderFulfillmentsPickupDetails withExpiredAt(OffsetDateTime expiredAt) {
        this.expiredAt = expiredAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expires_at")
    public OffsetDateTime expiresAt;
    public OrderFulfillmentsPickupDetails withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_curbside_pickup")
    public Boolean isCurbsidePickup;
    public OrderFulfillmentsPickupDetails withIsCurbsidePickup(Boolean isCurbsidePickup) {
        this.isCurbsidePickup = isCurbsidePickup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public OrderFulfillmentsPickupDetails withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("picked_up_at")
    public OffsetDateTime pickedUpAt;
    public OrderFulfillmentsPickupDetails withPickedUpAt(OffsetDateTime pickedUpAt) {
        this.pickedUpAt = pickedUpAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("pickup_at")
    public OffsetDateTime pickupAt;
    public OrderFulfillmentsPickupDetails withPickupAt(OffsetDateTime pickupAt) {
        this.pickupAt = pickupAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickup_window_duration")
    public String pickupWindowDuration;
    public OrderFulfillmentsPickupDetails withPickupWindowDuration(String pickupWindowDuration) {
        this.pickupWindowDuration = pickupWindowDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("placed_at")
    public OffsetDateTime placedAt;
    public OrderFulfillmentsPickupDetails withPlacedAt(OffsetDateTime placedAt) {
        this.placedAt = placedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prep_time_duration")
    public String prepTimeDuration;
    public OrderFulfillmentsPickupDetails withPrepTimeDuration(String prepTimeDuration) {
        this.prepTimeDuration = prepTimeDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ready_at")
    public OffsetDateTime readyAt;
    public OrderFulfillmentsPickupDetails withReadyAt(OffsetDateTime readyAt) {
        this.readyAt = readyAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipient")
    public OrderFulfillmentsPickupDetailsRecipient recipient;
    public OrderFulfillmentsPickupDetails withRecipient(OrderFulfillmentsPickupDetailsRecipient recipient) {
        this.recipient = recipient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("rejected_at")
    public OffsetDateTime rejectedAt;
    public OrderFulfillmentsPickupDetails withRejectedAt(OffsetDateTime rejectedAt) {
        this.rejectedAt = rejectedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_type")
    public OrderFulfillmentsPickupDetailsScheduleTypeEnum scheduleType;
    public OrderFulfillmentsPickupDetails withScheduleType(OrderFulfillmentsPickupDetailsScheduleTypeEnum scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    }
}