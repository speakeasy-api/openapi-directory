package openapisdk.models.operations;



public class ListConnectionsResponse {
    public String contentType;
    public ListConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConnectionsOutput listConnectionsOutput;
    public ListConnectionsResponse withListConnectionsOutput(openapisdk.models.shared.ListConnectionsOutput listConnectionsOutput) {
        this.listConnectionsOutput = listConnectionsOutput;
        return this;
    }
    public Long statusCode;
    public ListConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}