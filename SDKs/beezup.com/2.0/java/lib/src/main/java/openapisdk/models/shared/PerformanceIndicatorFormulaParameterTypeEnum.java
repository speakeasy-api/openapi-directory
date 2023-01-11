package openapisdk.models.shared;


public enum PerformanceIndicatorFormulaParameterTypeEnum {
    COST("Cost"),
    TOTAL_SALES("TotalSales"),
    MARGIN("Margin"),
    TOTAL_SALES_MINUS_COST("TotalSalesMinusCost"),
    MARGIN_MINUS_COST("MarginMinusCost"),
    ORDER_COUNT("OrderCount"),
    CLICK_COUNT("ClickCount"),
    SOLD_PRODUCT_COUNT("SoldProductCount"),
    ONE("One");

    public final String value;

    private PerformanceIndicatorFormulaParameterTypeEnum(String value) {
        this.value = value;
    }
}
