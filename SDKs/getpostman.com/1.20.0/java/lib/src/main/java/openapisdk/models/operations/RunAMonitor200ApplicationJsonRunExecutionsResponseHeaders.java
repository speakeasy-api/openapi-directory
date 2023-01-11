package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection")
    public String connection;
    public RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders withConnection(String connection) {
        this.connection = connection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content-encoding")
    public String contentEncoding;
    public RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders withContentEncoding(String contentEncoding) {
        this.contentEncoding = contentEncoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content-type")
    public String contentType;
    public RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transfer-encoding")
    public String transferEncoding;
    public RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders withTransferEncoding(String transferEncoding) {
        this.transferEncoding = transferEncoding;
        return this;
    }
}