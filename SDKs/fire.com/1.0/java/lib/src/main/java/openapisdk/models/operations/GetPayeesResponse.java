package openapisdk.models.operations;



public class GetPayeesResponse {
    public String contentType;
    public GetPayeesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetPayeesPayee payee;
    public GetPayeesResponse withPayee(GetPayeesPayee payee) {
        this.payee = payee;
        return this;
    }
    public Long statusCode;
    public GetPayeesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}