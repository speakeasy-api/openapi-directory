package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostMakePdfRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html")
    public String html;
    public PostMakePdfRequestBody withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public PostMakePdfRequestBody withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PostMakePdfRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}