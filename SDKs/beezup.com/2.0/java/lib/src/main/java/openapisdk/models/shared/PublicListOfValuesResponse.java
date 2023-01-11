package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublicListOfValuesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public BeezUpCommonListOfValueItem[] items;
    public PublicListOfValuesResponse withItems(BeezUpCommonListOfValueItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public PublicListOfValuesResponseLinks links;
    public PublicListOfValuesResponse withLinks(PublicListOfValuesResponseLinks links) {
        this.links = links;
        return this;
    }
}