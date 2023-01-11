package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CookieObject
 * <p>Describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards cookies to the origin and, if so, which ones.</p> <p>For the cookies that you specify, your distribution caches separate versions of the specified content based on the cookie values in viewer requests.</p>
**/
public class CookieObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookiesAllowList")
    public String[] cookiesAllowList;
    public CookieObject withCookiesAllowList(String[] cookiesAllowList) {
        this.cookiesAllowList = cookiesAllowList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("option")
    public ForwardValuesEnum option;
    public CookieObject withOption(ForwardValuesEnum option) {
        this.option = option;
        return this;
    }
}