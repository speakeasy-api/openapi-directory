package openapisdk.models.shared;



/**
 * LatLonOptions
 * Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.
**/
public class LatLonOptions {
    public String defaultValue;
    public LatLonOptions withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public Boolean facetEnabled;
    public LatLonOptions withFacetEnabled(Boolean facetEnabled) {
        this.facetEnabled = facetEnabled;
        return this;
    }
    public Boolean returnEnabled;
    public LatLonOptions withReturnEnabled(Boolean returnEnabled) {
        this.returnEnabled = returnEnabled;
        return this;
    }
    public Boolean searchEnabled;
    public LatLonOptions withSearchEnabled(Boolean searchEnabled) {
        this.searchEnabled = searchEnabled;
        return this;
    }
    public Boolean sortEnabled;
    public LatLonOptions withSortEnabled(Boolean sortEnabled) {
        this.sortEnabled = sortEnabled;
        return this;
    }
    public String sourceField;
    public LatLonOptions withSourceField(String sourceField) {
        this.sourceField = sourceField;
        return this;
    }
}