package openapisdk.models.shared;



/**
 * HttpHeaderConditionConfig
 * <p>Information about an HTTP header condition.</p> <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p>
**/
public class HttpHeaderConditionConfig {
    public String httpHeaderName;
    public HttpHeaderConditionConfig withHttpHeaderName(String httpHeaderName) {
        this.httpHeaderName = httpHeaderName;
        return this;
    }
    public String[] values;
    public HttpHeaderConditionConfig withValues(String[] values) {
        this.values = values;
        return this;
    }
}