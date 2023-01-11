package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetMinuteUsageResponse
 * <p/>
**/
public class GetMinuteUsageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedMinutesRemaining")
    public Long estimatedMinutesRemaining;
    public GetMinuteUsageResponse withEstimatedMinutesRemaining(Long estimatedMinutesRemaining) {
        this.estimatedMinutesRemaining = estimatedMinutesRemaining;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isReservedMinutesCustomer")
    public Boolean isReservedMinutesCustomer;
    public GetMinuteUsageResponse withIsReservedMinutesCustomer(Boolean isReservedMinutesCustomer) {
        this.isReservedMinutesCustomer = isReservedMinutesCustomer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalReservedMinuteAllocation")
    public Long totalReservedMinuteAllocation;
    public GetMinuteUsageResponse withTotalReservedMinuteAllocation(Long totalReservedMinuteAllocation) {
        this.totalReservedMinuteAllocation = totalReservedMinuteAllocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalScheduledMinutes")
    public Long totalScheduledMinutes;
    public GetMinuteUsageResponse withTotalScheduledMinutes(Long totalScheduledMinutes) {
        this.totalScheduledMinutes = totalScheduledMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upcomingMinutesScheduled")
    public Long upcomingMinutesScheduled;
    public GetMinuteUsageResponse withUpcomingMinutesScheduled(Long upcomingMinutesScheduled) {
        this.upcomingMinutesScheduled = upcomingMinutesScheduled;
        return this;
    }
}