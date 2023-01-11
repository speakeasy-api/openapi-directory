package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier[] data;
    public EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode withData(ResourceIdentifier[] data) {
        this.data = data;
        return this;
    }
}