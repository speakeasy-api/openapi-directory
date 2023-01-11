package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SeasonRelationshipsLastReleasedEpisode
 * The most recently released episode within the season
**/
public class SeasonRelationshipsLastReleasedEpisode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier data;
    public SeasonRelationshipsLastReleasedEpisode withData(ResourceIdentifier data) {
        this.data = data;
        return this;
    }
}