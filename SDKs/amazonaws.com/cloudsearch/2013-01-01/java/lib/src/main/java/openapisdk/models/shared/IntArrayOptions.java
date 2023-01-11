package openapisdk.models.shared;



/**
 * IntArrayOptions
 * Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.
**/
public class IntArrayOptions {
    public Long defaultValue;
    public IntArrayOptions withDefaultValue(Long defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public Boolean facetEnabled;
    public IntArrayOptions withFacetEnabled(Boolean facetEnabled) {
        this.facetEnabled = facetEnabled;
        return this;
    }
    public Boolean returnEnabled;
    public IntArrayOptions withReturnEnabled(Boolean returnEnabled) {
        this.returnEnabled = returnEnabled;
        return this;
    }
    public Boolean searchEnabled;
    public IntArrayOptions withSearchEnabled(Boolean searchEnabled) {
        this.searchEnabled = searchEnabled;
        return this;
    }
    public String sourceFields;
    public IntArrayOptions withSourceFields(String sourceFields) {
        this.sourceFields = sourceFields;
        return this;
    }
}