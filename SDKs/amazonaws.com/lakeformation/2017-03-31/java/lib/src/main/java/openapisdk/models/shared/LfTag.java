package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LfTag
 * A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns not tagged 'PII' of tables tagged 'Prod'.
**/
public class LfTag {
    @JsonProperty("TagKey")
    public String tagKey;
    public LfTag withTagKey(String tagKey) {
        this.tagKey = tagKey;
        return this;
    }
    @JsonProperty("TagValues")
    public String[] tagValues;
    public LfTag withTagValues(String[] tagValues) {
        this.tagValues = tagValues;
        return this;
    }
}