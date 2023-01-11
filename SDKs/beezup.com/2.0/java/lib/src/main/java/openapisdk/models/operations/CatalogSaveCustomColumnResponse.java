package openapisdk.models.operations;



public class CatalogSaveCustomColumnResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public CatalogSaveCustomColumnResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public CatalogSaveCustomColumnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CatalogSaveCustomColumnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ImportAlreadyInProgressResponse importAlreadyInProgressResponse;
    public CatalogSaveCustomColumnResponse withImportAlreadyInProgressResponse(openapisdk.models.shared.ImportAlreadyInProgressResponse importAlreadyInProgressResponse) {
        this.importAlreadyInProgressResponse = importAlreadyInProgressResponse;
        return this;
    }
}