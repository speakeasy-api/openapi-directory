package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListEventTypesFilter
 * Information about a filter to apply to the list of returned event types. You can filter by resource type or service name.
**/
public class ListEventTypesFilter {
    @JsonProperty("Name")
    public ListEventTypesFilterNameEnum name;
    public ListEventTypesFilter withName(ListEventTypesFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public ListEventTypesFilter withValue(String value) {
        this.value = value;
        return this;
    }
}