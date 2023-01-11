package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier[] data;
    public EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason withData(ResourceIdentifier[] data) {
        this.data = data;
        return this;
    }
}