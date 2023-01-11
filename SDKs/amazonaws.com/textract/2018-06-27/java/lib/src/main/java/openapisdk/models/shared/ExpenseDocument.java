package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExpenseDocument
 * The structure holding all the information returned by AnalyzeExpense
**/
public class ExpenseDocument {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpenseIndex")
    public Long expenseIndex;
    public ExpenseDocument withExpenseIndex(Long expenseIndex) {
        this.expenseIndex = expenseIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineItemGroups")
    public LineItemGroup[] lineItemGroups;
    public ExpenseDocument withLineItemGroups(LineItemGroup[] lineItemGroups) {
        this.lineItemGroups = lineItemGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SummaryFields")
    public ExpenseField[] summaryFields;
    public ExpenseDocument withSummaryFields(ExpenseField[] summaryFields) {
        this.summaryFields = summaryFields;
        return this;
    }
}