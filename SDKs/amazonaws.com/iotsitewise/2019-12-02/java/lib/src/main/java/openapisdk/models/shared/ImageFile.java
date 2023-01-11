package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImageFile
 * Contains an image file.
**/
public class ImageFile {
    @JsonProperty("data")
    public String data;
    public ImageFile withData(String data) {
        this.data = data;
        return this;
    }
    @JsonProperty("type")
    public ImageFileTypeEnum type;
    public ImageFile withType(ImageFileTypeEnum type) {
        this.type = type;
        return this;
    }
}