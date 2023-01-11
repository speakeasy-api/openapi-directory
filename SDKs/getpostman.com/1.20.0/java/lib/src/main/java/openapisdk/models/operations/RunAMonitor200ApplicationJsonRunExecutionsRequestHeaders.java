package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accept")
    public String accept;
    public RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accept-encoding")
    public String acceptEncoding;
    public RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders withAcceptEncoding(String acceptEncoding) {
        this.acceptEncoding = acceptEncoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content-length")
    public Double contentLength;
    public RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders withContentLength(Double contentLength) {
        this.contentLength = contentLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content-type")
    public String contentType;
    public RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}