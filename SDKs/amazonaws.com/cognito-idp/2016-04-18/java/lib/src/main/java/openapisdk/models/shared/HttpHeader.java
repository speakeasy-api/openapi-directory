package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpHeader
 * The HTTP header.
**/
public class HttpHeader {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headerName")
    public String headerName;
    public HttpHeader withHeaderName(String headerName) {
        this.headerName = headerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headerValue")
    public String headerValue;
    public HttpHeader withHeaderValue(String headerValue) {
        this.headerValue = headerValue;
        return this;
    }
}