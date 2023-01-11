package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationSource
 * Represents an application source.
**/
public class ApplicationSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudFormationStackARN")
    public String cloudFormationStackARN;
    public ApplicationSource withCloudFormationStackArn(String cloudFormationStackARN) {
        this.cloudFormationStackARN = cloudFormationStackARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagFilters")
    public TagFilter[] tagFilters;
    public ApplicationSource withTagFilters(TagFilter[] tagFilters) {
        this.tagFilters = tagFilters;
        return this;
    }
}