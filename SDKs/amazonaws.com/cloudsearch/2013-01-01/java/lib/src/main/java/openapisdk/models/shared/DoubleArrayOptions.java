package openapisdk.models.shared;



/**
 * DoubleArrayOptions
 * Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.
**/
public class DoubleArrayOptions {
    public Double defaultValue;
    public DoubleArrayOptions withDefaultValue(Double defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public Boolean facetEnabled;
    public DoubleArrayOptions withFacetEnabled(Boolean facetEnabled) {
        this.facetEnabled = facetEnabled;
        return this;
    }
    public Boolean returnEnabled;
    public DoubleArrayOptions withReturnEnabled(Boolean returnEnabled) {
        this.returnEnabled = returnEnabled;
        return this;
    }
    public Boolean searchEnabled;
    public DoubleArrayOptions withSearchEnabled(Boolean searchEnabled) {
        this.searchEnabled = searchEnabled;
        return this;
    }
    public String sourceFields;
    public DoubleArrayOptions withSourceFields(String sourceFields) {
        this.sourceFields = sourceFields;
        return this;
    }
}