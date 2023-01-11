package openapisdk.models.shared;



/**
 * DateArrayOptions
 * Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.
**/
public class DateArrayOptions {
    public String defaultValue;
    public DateArrayOptions withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public Boolean facetEnabled;
    public DateArrayOptions withFacetEnabled(Boolean facetEnabled) {
        this.facetEnabled = facetEnabled;
        return this;
    }
    public Boolean returnEnabled;
    public DateArrayOptions withReturnEnabled(Boolean returnEnabled) {
        this.returnEnabled = returnEnabled;
        return this;
    }
    public Boolean searchEnabled;
    public DateArrayOptions withSearchEnabled(Boolean searchEnabled) {
        this.searchEnabled = searchEnabled;
        return this;
    }
    public String sourceFields;
    public DateArrayOptions withSourceFields(String sourceFields) {
        this.sourceFields = sourceFields;
        return this;
    }
}