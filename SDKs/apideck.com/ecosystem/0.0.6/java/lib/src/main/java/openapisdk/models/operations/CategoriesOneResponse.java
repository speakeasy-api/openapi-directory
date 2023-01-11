package openapisdk.models.operations;



public class CategoriesOneResponse {
    public String contentType;
    public CategoriesOneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCategoryResponse getCategoryResponse;
    public CategoriesOneResponse withGetCategoryResponse(openapisdk.models.shared.GetCategoryResponse getCategoryResponse) {
        this.getCategoryResponse = getCategoryResponse;
        return this;
    }
    public Long statusCode;
    public CategoriesOneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}