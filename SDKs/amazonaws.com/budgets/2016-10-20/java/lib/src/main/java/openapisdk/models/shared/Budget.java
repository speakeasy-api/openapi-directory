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
 * Budget
 * <p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the ARN pattern for a budget: </p> <p> <code>arn:aws:budgets::AccountId:budget/budgetName</code> </p>
**/
public class Budget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BudgetLimit")
    public Spend budgetLimit;
    public Budget withBudgetLimit(Spend budgetLimit) {
        this.budgetLimit = budgetLimit;
        return this;
    }
    @JsonProperty("BudgetName")
    public String budgetName;
    public Budget withBudgetName(String budgetName) {
        this.budgetName = budgetName;
        return this;
    }
    @JsonProperty("BudgetType")
    public BudgetTypeEnum budgetType;
    public Budget withBudgetType(BudgetTypeEnum budgetType) {
        this.budgetType = budgetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CalculatedSpend")
    public CalculatedSpend calculatedSpend;
    public Budget withCalculatedSpend(CalculatedSpend calculatedSpend) {
        this.calculatedSpend = calculatedSpend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CostFilters")
    public java.util.Map<String, String[]> costFilters;
    public Budget withCostFilters(java.util.Map<String, String[]> costFilters) {
        this.costFilters = costFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CostTypes")
    public CostTypes costTypes;
    public Budget withCostTypes(CostTypes costTypes) {
        this.costTypes = costTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedTime")
    public OffsetDateTime lastUpdatedTime;
    public Budget withLastUpdatedTime(OffsetDateTime lastUpdatedTime) {
        this.lastUpdatedTime = lastUpdatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlannedBudgetLimits")
    public java.util.Map<String, Spend> plannedBudgetLimits;
    public Budget withPlannedBudgetLimits(java.util.Map<String, Spend> plannedBudgetLimits) {
        this.plannedBudgetLimits = plannedBudgetLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimePeriod")
    public TimePeriod timePeriod;
    public Budget withTimePeriod(TimePeriod timePeriod) {
        this.timePeriod = timePeriod;
        return this;
    }
    @JsonProperty("TimeUnit")
    public TimeUnitEnum timeUnit;
    public Budget withTimeUnit(TimeUnitEnum timeUnit) {
        this.timeUnit = timeUnit;
        return this;
    }
}