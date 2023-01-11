package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImportFilter
 * Filters the response from the operation.
**/
public class ImportFilter {
    @JsonProperty("name")
    public ImportFilterNameEnum name;
    public ImportFilter withName(ImportFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("operator")
    public ImportFilterOperatorEnum operator;
    public ImportFilter withOperator(ImportFilterOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public ImportFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}