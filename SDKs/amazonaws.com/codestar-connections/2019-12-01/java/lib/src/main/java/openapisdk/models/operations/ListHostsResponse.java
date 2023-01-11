package openapisdk.models.operations;



public class ListHostsResponse {
    public String contentType;
    public ListHostsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListHostsOutput listHostsOutput;
    public ListHostsResponse withListHostsOutput(openapisdk.models.shared.ListHostsOutput listHostsOutput) {
        this.listHostsOutput = listHostsOutput;
        return this;
    }
    public Long statusCode;
    public ListHostsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}