package openapisdk.models.shared;



/**
 * IntOptions
 * Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.
**/
public class IntOptions {
    public Long defaultValue;
    public IntOptions withDefaultValue(Long defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public Boolean facetEnabled;
    public IntOptions withFacetEnabled(Boolean facetEnabled) {
        this.facetEnabled = facetEnabled;
        return this;
    }
    public Boolean returnEnabled;
    public IntOptions withReturnEnabled(Boolean returnEnabled) {
        this.returnEnabled = returnEnabled;
        return this;
    }
    public Boolean searchEnabled;
    public IntOptions withSearchEnabled(Boolean searchEnabled) {
        this.searchEnabled = searchEnabled;
        return this;
    }
    public Boolean sortEnabled;
    public IntOptions withSortEnabled(Boolean sortEnabled) {
        this.sortEnabled = sortEnabled;
        return this;
    }
    public String sourceField;
    public IntOptions withSourceField(String sourceField) {
        this.sourceField = sourceField;
        return this;
    }
}