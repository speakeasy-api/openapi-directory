package openapisdk.models.shared;



/**
 * LiteralOptions
 * Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.
**/
public class LiteralOptions {
    public String defaultValue;
    public LiteralOptions withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public Boolean facetEnabled;
    public LiteralOptions withFacetEnabled(Boolean facetEnabled) {
        this.facetEnabled = facetEnabled;
        return this;
    }
    public Boolean returnEnabled;
    public LiteralOptions withReturnEnabled(Boolean returnEnabled) {
        this.returnEnabled = returnEnabled;
        return this;
    }
    public Boolean searchEnabled;
    public LiteralOptions withSearchEnabled(Boolean searchEnabled) {
        this.searchEnabled = searchEnabled;
        return this;
    }
    public Boolean sortEnabled;
    public LiteralOptions withSortEnabled(Boolean sortEnabled) {
        this.sortEnabled = sortEnabled;
        return this;
    }
    public String sourceField;
    public LiteralOptions withSourceField(String sourceField) {
        this.sourceField = sourceField;
        return this;
    }
}