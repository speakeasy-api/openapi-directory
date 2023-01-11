package openapisdk.models.operations;



public class ListManagedDataIdentifiersResponse {
    public String contentType;
    public ListManagedDataIdentifiersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListManagedDataIdentifiersResponse listManagedDataIdentifiersResponse;
    public ListManagedDataIdentifiersResponse withListManagedDataIdentifiersResponse(openapisdk.models.shared.ListManagedDataIdentifiersResponse listManagedDataIdentifiersResponse) {
        this.listManagedDataIdentifiersResponse = listManagedDataIdentifiersResponse;
        return this;
    }
    public Long statusCode;
    public ListManagedDataIdentifiersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}