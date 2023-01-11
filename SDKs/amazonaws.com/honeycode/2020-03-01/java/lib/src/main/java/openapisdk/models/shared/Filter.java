package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Filter
 *  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate. 
**/
public class Filter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contextRowId")
    public String contextRowId;
    public Filter withContextRowId(String contextRowId) {
        this.contextRowId = contextRowId;
        return this;
    }
    @JsonProperty("formula")
    public String formula;
    public Filter withFormula(String formula) {
        this.formula = formula;
        return this;
    }
}