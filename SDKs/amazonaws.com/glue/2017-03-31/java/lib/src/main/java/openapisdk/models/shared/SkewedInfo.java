package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SkewedInfo
 * Specifies skewed values in a table. Skewed values are those that occur with very high frequency.
**/
public class SkewedInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SkewedColumnNames")
    public String[] skewedColumnNames;
    public SkewedInfo withSkewedColumnNames(String[] skewedColumnNames) {
        this.skewedColumnNames = skewedColumnNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SkewedColumnValueLocationMaps")
    public java.util.Map<String, String> skewedColumnValueLocationMaps;
    public SkewedInfo withSkewedColumnValueLocationMaps(java.util.Map<String, String> skewedColumnValueLocationMaps) {
        this.skewedColumnValueLocationMaps = skewedColumnValueLocationMaps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SkewedColumnValues")
    public String[] skewedColumnValues;
    public SkewedInfo withSkewedColumnValues(String[] skewedColumnValues) {
        this.skewedColumnValues = skewedColumnValues;
        return this;
    }
}