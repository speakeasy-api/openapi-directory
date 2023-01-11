package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilterRule
 * Specifies which files, folders, and objects to include or exclude when transferring files from source to destination.
**/
public class FilterRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterType")
    public FilterTypeEnum filterType;
    public FilterRule withFilterType(FilterTypeEnum filterType) {
        this.filterType = filterType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public FilterRule withValue(String value) {
        this.value = value;
        return this;
    }
}