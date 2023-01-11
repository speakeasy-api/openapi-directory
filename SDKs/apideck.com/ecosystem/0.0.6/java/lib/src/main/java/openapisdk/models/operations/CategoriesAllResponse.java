package openapisdk.models.operations;



public class CategoriesAllResponse {
    public String contentType;
    public CategoriesAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCategoriesResponse getCategoriesResponse;
    public CategoriesAllResponse withGetCategoriesResponse(openapisdk.models.shared.GetCategoriesResponse getCategoriesResponse) {
        this.getCategoriesResponse = getCategoriesResponse;
        return this;
    }
    public Long statusCode;
    public CategoriesAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}