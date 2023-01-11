package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CopyOptimisationRequest
 * Copy the optimisation between 2 channels
**/
public class CopyOptimisationRequest {
    @JsonProperty("channelIdSource")
    public String channelIdSource;
    public CopyOptimisationRequest withChannelIdSource(String channelIdSource) {
        this.channelIdSource = channelIdSource;
        return this;
    }
    @JsonProperty("channelIdTarget")
    public String channelIdTarget;
    public CopyOptimisationRequest withChannelIdTarget(String channelIdTarget) {
        this.channelIdTarget = channelIdTarget;
        return this;
    }
    @JsonProperty("keepExistingOptimisation")
    public Boolean keepExistingOptimisation;
    public CopyOptimisationRequest withKeepExistingOptimisation(Boolean keepExistingOptimisation) {
        this.keepExistingOptimisation = keepExistingOptimisation;
        return this;
    }
}