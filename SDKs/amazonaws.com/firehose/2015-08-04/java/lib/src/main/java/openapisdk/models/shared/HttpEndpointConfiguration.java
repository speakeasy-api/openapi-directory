package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpEndpointConfiguration
 * Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data.
**/
public class HttpEndpointConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessKey")
    public String accessKey;
    public HttpEndpointConfiguration withAccessKey(String accessKey) {
        this.accessKey = accessKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public HttpEndpointConfiguration withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Url")
    public String url;
    public HttpEndpointConfiguration withUrl(String url) {
        this.url = url;
        return this;
    }
}