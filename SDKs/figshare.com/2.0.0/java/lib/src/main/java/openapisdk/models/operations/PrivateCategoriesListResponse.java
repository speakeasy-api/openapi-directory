package openapisdk.models.operations;



public class PrivateCategoriesListResponse {
    public openapisdk.models.shared.Category[] categories;
    public PrivateCategoriesListResponse withCategories(openapisdk.models.shared.Category[] categories) {
        this.categories = categories;
        return this;
    }
    public String contentType;
    public PrivateCategoriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCategoriesListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateCategoriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}