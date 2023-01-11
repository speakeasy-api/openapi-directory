package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SeriesRelationshipsCoverImage
 * The cover image for the series
**/
public class SeriesRelationshipsCoverImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier data;
    public SeriesRelationshipsCoverImage withData(ResourceIdentifier data) {
        this.data = data;
        return this;
    }
}