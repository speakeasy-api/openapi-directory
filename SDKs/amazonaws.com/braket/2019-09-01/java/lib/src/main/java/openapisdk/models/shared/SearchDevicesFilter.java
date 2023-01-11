package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SearchDevicesFilter
 * The filter to use for searching devices.
**/
public class SearchDevicesFilter {
    @JsonProperty("name")
    public String name;
    public SearchDevicesFilter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public SearchDevicesFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}