package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LovLink3
 * Describe the way you have to follow to get access to the LOV
**/
public class LovLink3 {
    @JsonProperty("href")
    public String href;
    public LovLink3 withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public HttpMethodEnum method;
    public LovLink3 withMethod(HttpMethodEnum method) {
        this.method = method;
        return this;
    }
}