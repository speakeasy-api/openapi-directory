package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListTargetsFilter
 * Information about a filter to apply to the list of returned targets. You can filter by target type, address, or status. For example, to filter results to notification rules that have active Amazon SNS topics as targets, you could specify a ListTargetsFilter Name as TargetType and a Value of SNS, and a Name of TARGET_STATUS and a Value of ACTIVE.
**/
public class ListTargetsFilter {
    @JsonProperty("Name")
    public ListTargetsFilterNameEnum name;
    public ListTargetsFilter withName(ListTargetsFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public ListTargetsFilter withValue(String value) {
        this.value = value;
        return this;
    }
}