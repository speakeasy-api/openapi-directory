package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SummaryReportResponse
 * This type defines the fields in an Promotions Manager Summary report. Reports are formatted in JSON. For more details, see Reading item promotion Summary reports.
**/
public class SummaryReportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseSale")
    public Amount baseSale;
    public SummaryReportResponse withBaseSale(Amount baseSale) {
        this.baseSale = baseSale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public SummaryReportResponse withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentageSalesLift")
    public String percentageSalesLift;
    public SummaryReportResponse withPercentageSalesLift(String percentageSalesLift) {
        this.percentageSalesLift = percentageSalesLift;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionSale")
    public Amount promotionSale;
    public SummaryReportResponse withPromotionSale(Amount promotionSale) {
        this.promotionSale = promotionSale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSale")
    public Amount totalSale;
    public SummaryReportResponse withTotalSale(Amount totalSale) {
        this.totalSale = totalSale;
        return this;
    }
}