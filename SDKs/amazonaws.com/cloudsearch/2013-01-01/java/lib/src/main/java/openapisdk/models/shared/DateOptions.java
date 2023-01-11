package openapisdk.models.shared;



/**
 * DateOptions
 * Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.
**/
public class DateOptions {
    public String defaultValue;
    public DateOptions withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public Boolean facetEnabled;
    public DateOptions withFacetEnabled(Boolean facetEnabled) {
        this.facetEnabled = facetEnabled;
        return this;
    }
    public Boolean returnEnabled;
    public DateOptions withReturnEnabled(Boolean returnEnabled) {
        this.returnEnabled = returnEnabled;
        return this;
    }
    public Boolean searchEnabled;
    public DateOptions withSearchEnabled(Boolean searchEnabled) {
        this.searchEnabled = searchEnabled;
        return this;
    }
    public Boolean sortEnabled;
    public DateOptions withSortEnabled(Boolean sortEnabled) {
        this.sortEnabled = sortEnabled;
        return this;
    }
    public String sourceField;
    public DateOptions withSourceField(String sourceField) {
        this.sourceField = sourceField;
        return this;
    }
}