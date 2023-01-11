package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataItem
 * The data in a particular data cell defined on the screen.
**/
public class DataItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedValue")
    public String formattedValue;
    public DataItem withFormattedValue(String formattedValue) {
        this.formattedValue = formattedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrideFormat")
    public FormatEnum overrideFormat;
    public DataItem withOverrideFormat(FormatEnum overrideFormat) {
        this.overrideFormat = overrideFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawValue")
    public String rawValue;
    public DataItem withRawValue(String rawValue) {
        this.rawValue = rawValue;
        return this;
    }
}