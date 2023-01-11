package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListNotificationRulesFilter
 * Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target.
**/
public class ListNotificationRulesFilter {
    @JsonProperty("Name")
    public ListNotificationRulesFilterNameEnum name;
    public ListNotificationRulesFilter withName(ListNotificationRulesFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public ListNotificationRulesFilter withValue(String value) {
        this.value = value;
        return this;
    }
}