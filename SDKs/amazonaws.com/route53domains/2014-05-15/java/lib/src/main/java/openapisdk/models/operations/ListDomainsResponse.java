package openapisdk.models.operations;



public class ListDomainsResponse {
    public String contentType;
    public ListDomainsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInput;
    public ListDomainsResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public openapisdk.models.shared.ListDomainsResponse listDomainsResponse;
    public ListDomainsResponse withListDomainsResponse(openapisdk.models.shared.ListDomainsResponse listDomainsResponse) {
        this.listDomainsResponse = listDomainsResponse;
        return this;
    }
    public Long statusCode;
    public ListDomainsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}