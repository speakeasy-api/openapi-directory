package openapisdk.models.operations;



public class PrivateArticleCategoriesListResponse {
    public openapisdk.models.shared.Category[] categories;
    public PrivateArticleCategoriesListResponse withCategories(openapisdk.models.shared.Category[] categories) {
        this.categories = categories;
        return this;
    }
    public String contentType;
    public PrivateArticleCategoriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleCategoriesListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateArticleCategoriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}