package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateApplicationInput
 * Represents the input of a <code>CreateApplication</code> operation.
**/
public class CreateApplicationInput {
    @JsonProperty("applicationName")
    public String applicationName;
    public CreateApplicationInput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computePlatform")
    public ComputePlatformEnum computePlatform;
    public CreateApplicationInput withComputePlatform(ComputePlatformEnum computePlatform) {
        this.computePlatform = computePlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateApplicationInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}