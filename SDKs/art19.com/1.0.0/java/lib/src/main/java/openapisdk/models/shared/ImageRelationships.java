package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_assets")
    public ImageRelationshipsAllMediaAssetsAvailableForThisImage mediaAssets;
    public ImageRelationships withMediaAssets(ImageRelationshipsAllMediaAssetsAvailableForThisImage mediaAssets) {
        this.mediaAssets = mediaAssets;
        return this;
    }
}