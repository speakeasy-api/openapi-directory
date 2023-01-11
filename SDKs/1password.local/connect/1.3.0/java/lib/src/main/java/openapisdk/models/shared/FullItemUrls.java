package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FullItemUrls {
    @JsonProperty("href")
    public String href;
    public FullItemUrls withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public FullItemUrls withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
}