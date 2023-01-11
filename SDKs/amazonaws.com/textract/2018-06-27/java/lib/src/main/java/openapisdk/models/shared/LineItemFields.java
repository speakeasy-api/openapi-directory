package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItemFields
 * A structure that holds information about the different lines found in a document's tables.
**/
public class LineItemFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineItemExpenseFields")
    public ExpenseField[] lineItemExpenseFields;
    public LineItemFields withLineItemExpenseFields(ExpenseField[] lineItemExpenseFields) {
        this.lineItemExpenseFields = lineItemExpenseFields;
        return this;
    }
}