package openapisdk.models.operations;



public class ListTunnelsResponse {
    public String contentType;
    public ListTunnelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTunnelsResponse listTunnelsResponse;
    public ListTunnelsResponse withListTunnelsResponse(openapisdk.models.shared.ListTunnelsResponse listTunnelsResponse) {
        this.listTunnelsResponse = listTunnelsResponse;
        return this;
    }
    public Long statusCode;
    public ListTunnelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}