package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LocationFilter
 * You can use API filters to narrow down the list of resources returned by <code>ListLocations</code>. For example, to retrieve all your Amazon S3 locations, you can use <code>ListLocations</code> with filter name <code>LocationType S3</code> and <code>Operator Equals</code>.
**/
public class LocationFilter {
    @JsonProperty("Name")
    public LocationFilterNameEnum name;
    public LocationFilter withName(LocationFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Operator")
    public OperatorEnum operator;
    public LocationFilter withOperator(OperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonProperty("Values")
    public String[] values;
    public LocationFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}