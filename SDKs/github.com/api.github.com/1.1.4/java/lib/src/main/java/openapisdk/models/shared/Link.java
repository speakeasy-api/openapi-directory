package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Link
 * Hypermedia Link
**/
public class Link {
    @JsonProperty("href")
    public String href;
    public Link withHref(String href) {
        this.href = href;
        return this;
    }
}