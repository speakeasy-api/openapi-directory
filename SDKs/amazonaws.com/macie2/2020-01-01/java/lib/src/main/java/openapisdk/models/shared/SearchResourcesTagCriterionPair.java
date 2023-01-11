package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResourcesTagCriterionPair
 * Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based filter condition for a query. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based filter conditions.
**/
public class SearchResourcesTagCriterionPair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SearchResourcesTagCriterionPair withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public SearchResourcesTagCriterionPair withValue(String value) {
        this.value = value;
        return this;
    }
}