package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImageLocation
 * Contains an image that is uploaded to IoT SiteWise and available at a URL.
**/
public class ImageLocation {
    @JsonProperty("id")
    public String id;
    public ImageLocation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ImageLocation withUrl(String url) {
        this.url = url;
        return this;
    }
}