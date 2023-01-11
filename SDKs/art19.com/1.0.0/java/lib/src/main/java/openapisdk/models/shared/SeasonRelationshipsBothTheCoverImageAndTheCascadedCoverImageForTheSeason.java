package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SeasonRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier[] data;
    public SeasonRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason withData(ResourceIdentifier[] data) {
        this.data = data;
        return this;
    }
}