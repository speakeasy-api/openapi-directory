package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpEndpointRequestConfiguration
 * The configuration of the HTTP endpoint request.
**/
public class HttpEndpointRequestConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CommonAttributes")
    public HttpEndpointCommonAttribute[] commonAttributes;
    public HttpEndpointRequestConfiguration withCommonAttributes(HttpEndpointCommonAttribute[] commonAttributes) {
        this.commonAttributes = commonAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentEncoding")
    public ContentEncodingEnum contentEncoding;
    public HttpEndpointRequestConfiguration withContentEncoding(ContentEncodingEnum contentEncoding) {
        this.contentEncoding = contentEncoding;
        return this;
    }
}