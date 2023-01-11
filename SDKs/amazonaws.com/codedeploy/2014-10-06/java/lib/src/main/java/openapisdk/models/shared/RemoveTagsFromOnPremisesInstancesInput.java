package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RemoveTagsFromOnPremisesInstancesInput
 * Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code> operation.
**/
public class RemoveTagsFromOnPremisesInstancesInput {
    @JsonProperty("instanceNames")
    public String[] instanceNames;
    public RemoveTagsFromOnPremisesInstancesInput withInstanceNames(String[] instanceNames) {
        this.instanceNames = instanceNames;
        return this;
    }
    @JsonProperty("tags")
    public Tag[] tags;
    public RemoveTagsFromOnPremisesInstancesInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}