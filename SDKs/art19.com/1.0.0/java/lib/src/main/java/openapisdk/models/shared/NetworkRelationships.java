package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NetworkRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cover_image")
    public NetworkRelationshipsCoverImage coverImage;
    public NetworkRelationships withCoverImage(NetworkRelationshipsCoverImage coverImage) {
        this.coverImage = coverImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public NetworkRelationshipsImages images;
    public NetworkRelationships withImages(NetworkRelationshipsImages images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public NetworkRelationshipsParent parent;
    public NetworkRelationships withParent(NetworkRelationshipsParent parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series")
    public NetworkRelationshipsSeries series;
    public NetworkRelationships withSeries(NetworkRelationshipsSeries series) {
        this.series = series;
        return this;
    }
}