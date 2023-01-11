package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportAdvancedFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("globalMarginPercent")
    public Long globalMarginPercent;
    public ReportAdvancedFilters withGlobalMarginPercent(Long globalMarginPercent) {
        this.globalMarginPercent = globalMarginPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkClickToOrderMaxDay")
    public Long linkClickToOrderMaxDay;
    public ReportAdvancedFilters withLinkClickToOrderMaxDay(Long linkClickToOrderMaxDay) {
        this.linkClickToOrderMaxDay = linkClickToOrderMaxDay;
        return this;
    }
    @JsonProperty("linkClickToOrderType")
    public LinkClickToOrderTypeEnum linkClickToOrderType;
    public ReportAdvancedFilters withLinkClickToOrderType(LinkClickToOrderTypeEnum linkClickToOrderType) {
        this.linkClickToOrderType = linkClickToOrderType;
        return this;
    }
    @JsonProperty("marginType")
    public MarginTypeEnum marginType;
    public ReportAdvancedFilters withMarginType(MarginTypeEnum marginType) {
        this.marginType = marginType;
        return this;
    }
    @JsonProperty("onlyDirectSales")
    public Boolean onlyDirectSales;
    public ReportAdvancedFilters withOnlyDirectSales(Boolean onlyDirectSales) {
        this.onlyDirectSales = onlyDirectSales;
        return this;
    }
    @JsonProperty("onlyPaymentValidatedOrders")
    public Boolean onlyPaymentValidatedOrders;
    public ReportAdvancedFilters withOnlyPaymentValidatedOrders(Boolean onlyPaymentValidatedOrders) {
        this.onlyPaymentValidatedOrders = onlyPaymentValidatedOrders;
        return this;
    }
    @JsonProperty("performanceIndicatorFormula")
    public PerformanceIndicatorFormula performanceIndicatorFormula;
    public ReportAdvancedFilters withPerformanceIndicatorFormula(PerformanceIndicatorFormula performanceIndicatorFormula) {
        this.performanceIndicatorFormula = performanceIndicatorFormula;
        return this;
    }
}