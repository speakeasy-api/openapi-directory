package openapisdk.models.operations;



public class GetRegistryCatalogDataResponse {
    public String contentType;
    public GetRegistryCatalogDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRegistryCatalogDataResponse getRegistryCatalogDataResponse;
    public GetRegistryCatalogDataResponse withGetRegistryCatalogDataResponse(openapisdk.models.shared.GetRegistryCatalogDataResponse getRegistryCatalogDataResponse) {
        this.getRegistryCatalogDataResponse = getRegistryCatalogDataResponse;
        return this;
    }
    public Object serverException;
    public GetRegistryCatalogDataResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public GetRegistryCatalogDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedCommandException;
    public GetRegistryCatalogDataResponse withUnsupportedCommandException(Object unsupportedCommandException) {
        this.unsupportedCommandException = unsupportedCommandException;
        return this;
    }
}