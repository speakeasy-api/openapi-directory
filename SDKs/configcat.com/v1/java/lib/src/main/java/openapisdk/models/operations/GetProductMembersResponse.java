package openapisdk.models.operations;



public class GetProductMembersResponse {
    public String contentType;
    public GetProductMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MemberModel[] memberModels;
    public GetProductMembersResponse withMemberModels(openapisdk.models.shared.MemberModel[] memberModels) {
        this.memberModels = memberModels;
        return this;
    }
    public Long statusCode;
    public GetProductMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}