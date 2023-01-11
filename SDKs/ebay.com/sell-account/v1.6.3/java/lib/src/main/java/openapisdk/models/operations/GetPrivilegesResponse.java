package openapisdk.models.operations;



public class GetPrivilegesResponse {
    public String contentType;
    public GetPrivilegesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SellingPrivileges sellingPrivileges;
    public GetPrivilegesResponse withSellingPrivileges(openapisdk.models.shared.SellingPrivileges sellingPrivileges) {
        this.sellingPrivileges = sellingPrivileges;
        return this;
    }
    public Long statusCode;
    public GetPrivilegesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}