package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ShortBlob
 * Short Blob
**/
public class ShortBlob {
    @JsonProperty("sha")
    public String sha;
    public ShortBlob withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ShortBlob withUrl(String url) {
        this.url = url;
        return this;
    }
}