package openapisdk.models.operations;



public class CategoriesListResponse {
    public openapisdk.models.shared.Category[] categories;
    public CategoriesListResponse withCategories(openapisdk.models.shared.Category[] categories) {
        this.categories = categories;
        return this;
    }
    public String contentType;
    public CategoriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CategoriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}