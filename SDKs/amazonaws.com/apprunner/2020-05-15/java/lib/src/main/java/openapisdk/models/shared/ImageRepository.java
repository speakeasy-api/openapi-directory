package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageRepository
 * Describes a source image repository.
**/
public class ImageRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageConfiguration")
    public ImageConfiguration imageConfiguration;
    public ImageRepository withImageConfiguration(ImageConfiguration imageConfiguration) {
        this.imageConfiguration = imageConfiguration;
        return this;
    }
    @JsonProperty("ImageIdentifier")
    public String imageIdentifier;
    public ImageRepository withImageIdentifier(String imageIdentifier) {
        this.imageIdentifier = imageIdentifier;
        return this;
    }
    @JsonProperty("ImageRepositoryType")
    public ImageRepositoryTypeEnum imageRepositoryType;
    public ImageRepository withImageRepositoryType(ImageRepositoryTypeEnum imageRepositoryType) {
        this.imageRepositoryType = imageRepositoryType;
        return this;
    }
}