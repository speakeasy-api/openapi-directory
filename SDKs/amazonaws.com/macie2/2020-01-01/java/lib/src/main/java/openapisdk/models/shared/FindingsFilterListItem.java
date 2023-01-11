package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindingsFilterListItem
 * Provides information about a findings filter.
**/
public class FindingsFilterListItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public FindingsFilterActionEnum action;
    public FindingsFilterListItem withAction(FindingsFilterActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public FindingsFilterListItem withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FindingsFilterListItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FindingsFilterListItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public FindingsFilterListItem withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}