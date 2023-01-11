package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryTableRowsRequestBodyFilterFormula
 *  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate. 
**/
public class QueryTableRowsRequestBodyFilterFormula {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contextRowId")
    public String contextRowId;
    public QueryTableRowsRequestBodyFilterFormula withContextRowId(String contextRowId) {
        this.contextRowId = contextRowId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formula")
    public String formula;
    public QueryTableRowsRequestBodyFilterFormula withFormula(String formula) {
        this.formula = formula;
        return this;
    }
}