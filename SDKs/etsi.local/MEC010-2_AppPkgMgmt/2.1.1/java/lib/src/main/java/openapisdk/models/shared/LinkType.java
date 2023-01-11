package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LinkType {
    @JsonProperty("href")
    public String href;
    public LinkType withHref(String href) {
        this.href = href;
        return this;
    }
}