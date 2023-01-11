package openapisdk.models.operations;



public class CatalogChangeCatalogColumnUserNameResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public CatalogChangeCatalogColumnUserNameResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public CatalogChangeCatalogColumnUserNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CatalogChangeCatalogColumnUserNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ImportAlreadyInProgressResponse importAlreadyInProgressResponse;
    public CatalogChangeCatalogColumnUserNameResponse withImportAlreadyInProgressResponse(openapisdk.models.shared.ImportAlreadyInProgressResponse importAlreadyInProgressResponse) {
        this.importAlreadyInProgressResponse = importAlreadyInProgressResponse;
        return this;
    }
}