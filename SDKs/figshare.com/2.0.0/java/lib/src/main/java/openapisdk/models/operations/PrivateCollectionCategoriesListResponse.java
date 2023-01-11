package openapisdk.models.operations;



public class PrivateCollectionCategoriesListResponse {
    public openapisdk.models.shared.Category[] categories;
    public PrivateCollectionCategoriesListResponse withCategories(openapisdk.models.shared.Category[] categories) {
        this.categories = categories;
        return this;
    }
    public String contentType;
    public PrivateCollectionCategoriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionCategoriesListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionCategoriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}