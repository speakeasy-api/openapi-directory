package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserListOfValuesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public BeezUpCommonListOfValueItem[] items;
    public UserListOfValuesResponse withItems(BeezUpCommonListOfValueItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public UserListOfValuesResponseLinks links;
    public UserListOfValuesResponse withLinks(UserListOfValuesResponseLinks links) {
        this.links = links;
        return this;
    }
}