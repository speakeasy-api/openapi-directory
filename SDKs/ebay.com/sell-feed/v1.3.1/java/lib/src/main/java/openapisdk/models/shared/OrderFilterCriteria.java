package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderFilterCriteria
 * The type that defines the fields for the order filters.
**/
public class OrderFilterCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDateRange")
    public DateRange creationDateRange;
    public OrderFilterCriteria withCreationDateRange(DateRange creationDateRange) {
        this.creationDateRange = creationDateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiedDateRange")
    public DateRange modifiedDateRange;
    public OrderFilterCriteria withModifiedDateRange(DateRange modifiedDateRange) {
        this.modifiedDateRange = modifiedDateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderStatus")
    public String orderStatus;
    public OrderFilterCriteria withOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
        return this;
    }
}