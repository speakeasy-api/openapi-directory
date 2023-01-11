package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Cell
 * An object that represents a single cell in a table.
**/
public class Cell {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public FormatEnum format;
    public Cell withFormat(FormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedValue")
    public String formattedValue;
    public Cell withFormattedValue(String formattedValue) {
        this.formattedValue = formattedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formula")
    public String formula;
    public Cell withFormula(String formula) {
        this.formula = formula;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawValue")
    public String rawValue;
    public Cell withRawValue(String rawValue) {
        this.rawValue = rawValue;
        return this;
    }
}