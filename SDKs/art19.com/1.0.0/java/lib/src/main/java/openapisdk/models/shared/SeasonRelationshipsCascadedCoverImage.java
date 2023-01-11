package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SeasonRelationshipsCascadedCoverImage
 * The cover art for this season. If there is no specific cover for the season,
 * the cover image of the series' cover art will be returned.
 * The `/images` endpoint provideds details to the image.
 * 
**/
public class SeasonRelationshipsCascadedCoverImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier data;
    public SeasonRelationshipsCascadedCoverImage withData(ResourceIdentifier data) {
        this.data = data;
        return this;
    }
}