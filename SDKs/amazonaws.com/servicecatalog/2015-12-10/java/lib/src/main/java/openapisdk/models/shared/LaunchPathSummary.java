package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LaunchPathSummary
 * Summary information about a product path for a user.
**/
public class LaunchPathSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConstraintSummaries")
    public ConstraintSummary[] constraintSummaries;
    public LaunchPathSummary withConstraintSummaries(ConstraintSummary[] constraintSummaries) {
        this.constraintSummaries = constraintSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public LaunchPathSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public LaunchPathSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public LaunchPathSummary withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}