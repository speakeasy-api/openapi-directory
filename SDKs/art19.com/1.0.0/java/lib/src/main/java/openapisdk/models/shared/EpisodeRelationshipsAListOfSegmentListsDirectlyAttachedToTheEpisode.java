package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode
 * Only visible if the credential has write privileges on the series
**/
public class EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier[] data;
    public EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode withData(ResourceIdentifier[] data) {
        this.data = data;
        return this;
    }
}