package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BudgetPerformanceHistory
 * A history of the state of a budget at the end of the budget's specified time period.
**/
public class BudgetPerformanceHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BudgetName")
    public String budgetName;
    public BudgetPerformanceHistory withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BudgetType")
    public BudgetTypeEnum budgetType;
    public BudgetPerformanceHistory withBudgetType(BudgetTypeEnum budgetType) {
        this.budgetType = budgetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BudgetedAndActualAmountsList")
    public BudgetedAndActualAmounts[] budgetedAndActualAmountsList;
    public BudgetPerformanceHistory withBudgetedAndActualAmountsList(BudgetedAndActualAmounts[] budgetedAndActualAmountsList) {
        this.budgetedAndActualAmountsList = budgetedAndActualAmountsList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CostFilters")
    public java.util.Map<String, String[]> costFilters;
    public BudgetPerformanceHistory withCostFilters(java.util.Map<String, String[]> costFilters) {
        this.costFilters = costFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CostTypes")
    public CostTypes costTypes;
    public BudgetPerformanceHistory withCostTypes(CostTypes costTypes) {
        this.costTypes = costTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeUnit")
    public TimeUnitEnum timeUnit;
    public BudgetPerformanceHistory withTimeUnit(TimeUnitEnum timeUnit) {
        this.timeUnit = timeUnit;
        return this;
    }
}