package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExportFilter
 * Filtes the response form the operation
**/
public class ExportFilter {
    @JsonProperty("name")
    public ExportFilterNameEnum name;
    public ExportFilter withName(ExportFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("operator")
    public ExportFilterOperatorEnum operator;
    public ExportFilter withOperator(ExportFilterOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public ExportFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}