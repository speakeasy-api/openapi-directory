package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAttachmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Url")
    public String url;
    public GetAttachmentResponse withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UrlExpiry")
    public String urlExpiry;
    public GetAttachmentResponse withUrlExpiry(String urlExpiry) {
        this.urlExpiry = urlExpiry;
        return this;
    }
}