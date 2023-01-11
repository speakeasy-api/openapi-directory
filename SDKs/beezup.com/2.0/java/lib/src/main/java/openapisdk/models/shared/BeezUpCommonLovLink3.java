package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BeezUpCommonLovLink3
 * Describe the way you have to follow to get access to the LOV
**/
public class BeezUpCommonLovLink3 {
    @JsonProperty("href")
    public String href;
    public BeezUpCommonLovLink3 withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public BeezUpCommonHttpMethodEnum method;
    public BeezUpCommonLovLink3 withMethod(BeezUpCommonHttpMethodEnum method) {
        this.method = method;
        return this;
    }
}