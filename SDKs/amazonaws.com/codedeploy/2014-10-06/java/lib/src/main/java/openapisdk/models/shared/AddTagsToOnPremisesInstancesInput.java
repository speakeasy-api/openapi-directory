package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddTagsToOnPremisesInstancesInput
 * Represents the input of, and adds tags to, an on-premises instance operation.
**/
public class AddTagsToOnPremisesInstancesInput {
    @JsonProperty("instanceNames")
    public String[] instanceNames;
    public AddTagsToOnPremisesInstancesInput withInstanceNames(String[] instanceNames) {
        this.instanceNames = instanceNames;
        return this;
    }
    @JsonProperty("tags")
    public Tag[] tags;
    public AddTagsToOnPremisesInstancesInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}