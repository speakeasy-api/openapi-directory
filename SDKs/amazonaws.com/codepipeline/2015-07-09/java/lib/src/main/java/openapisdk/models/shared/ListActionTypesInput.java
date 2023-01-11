package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListActionTypesInput
 * Represents the input of a <code>ListActionTypes</code> action.
**/
public class ListActionTypesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionOwnerFilter")
    public ActionOwnerEnum actionOwnerFilter;
    public ListActionTypesInput withActionOwnerFilter(ActionOwnerEnum actionOwnerFilter) {
        this.actionOwnerFilter = actionOwnerFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListActionTypesInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionFilter")
    public String regionFilter;
    public ListActionTypesInput withRegionFilter(String regionFilter) {
        this.regionFilter = regionFilter;
        return this;
    }
}