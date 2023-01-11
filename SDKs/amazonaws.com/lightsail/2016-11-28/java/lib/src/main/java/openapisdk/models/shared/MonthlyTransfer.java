package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MonthlyTransfer
 * Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>).
**/
public class MonthlyTransfer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gbPerMonthAllocated")
    public Long gbPerMonthAllocated;
    public MonthlyTransfer withGbPerMonthAllocated(Long gbPerMonthAllocated) {
        this.gbPerMonthAllocated = gbPerMonthAllocated;
        return this;
    }
}