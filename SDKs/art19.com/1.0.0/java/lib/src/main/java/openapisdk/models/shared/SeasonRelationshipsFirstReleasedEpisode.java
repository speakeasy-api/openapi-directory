package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SeasonRelationshipsFirstReleasedEpisode
 * The first released episode within the season
**/
public class SeasonRelationshipsFirstReleasedEpisode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier data;
    public SeasonRelationshipsFirstReleasedEpisode withData(ResourceIdentifier data) {
        this.data = data;
        return this;
    }
}