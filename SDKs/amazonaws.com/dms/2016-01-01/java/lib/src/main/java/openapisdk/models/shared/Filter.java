package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Filter
 * Identifies the name and value of a filter object. This filter is used to limit the number and type of DMS objects that are returned for a particular <code>Describe*</code> call or similar operation. Filters are used as an optional parameter for certain API operations. 
**/
public class Filter {
    @JsonProperty("Name")
    public String name;
    public Filter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Values")
    public String[] values;
    public Filter withValues(String[] values) {
        this.values = values;
        return this;
    }
}