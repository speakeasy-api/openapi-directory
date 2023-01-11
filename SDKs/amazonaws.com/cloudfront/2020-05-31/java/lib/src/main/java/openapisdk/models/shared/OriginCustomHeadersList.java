package openapisdk.models.shared;



/**
 * OriginCustomHeadersList
 * A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution. 
**/
public class OriginCustomHeadersList {
    public String headerName;
    public OriginCustomHeadersList withHeaderName(String headerName) {
        this.headerName = headerName;
        return this;
    }
    public String headerValue;
    public OriginCustomHeadersList withHeaderValue(String headerValue) {
        this.headerValue = headerValue;
        return this;
    }
}