package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SeasonRelationshipsCoverImage
 * The cover image for the season
**/
public class SeasonRelationshipsCoverImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier data;
    public SeasonRelationshipsCoverImage withData(ResourceIdentifier data) {
        this.data = data;
        return this;
    }
}