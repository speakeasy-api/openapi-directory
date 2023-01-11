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
 * OrderHistory
 * Describe the history related to an order
**/
public class OrderHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeOrderReportings")
    public ChangeOrderReporting[] changeOrderReportings;
    public OrderHistory withChangeOrderReportings(ChangeOrderReporting[] changeOrderReportings) {
        this.changeOrderReportings = changeOrderReportings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("harvestOrderReportings")
    public HarvestOrderReporting[] harvestOrderReportings;
    public OrderHistory withHarvestOrderReportings(HarvestOrderReporting[] harvestOrderReportings) {
        this.harvestOrderReportings = harvestOrderReportings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModificationUtcDate")
    public OffsetDateTime lastModificationUtcDate;
    public OrderHistory withLastModificationUtcDate(OffsetDateTime lastModificationUtcDate) {
        this.lastModificationUtcDate = lastModificationUtcDate;
        return this;
    }
}