package openapisdk.models.operations;



public class PutRegistryCatalogDataResponse {
    public String contentType;
    public PutRegistryCatalogDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutRegistryCatalogDataResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.PutRegistryCatalogDataResponse putRegistryCatalogDataResponse;
    public PutRegistryCatalogDataResponse withPutRegistryCatalogDataResponse(openapisdk.models.shared.PutRegistryCatalogDataResponse putRegistryCatalogDataResponse) {
        this.putRegistryCatalogDataResponse = putRegistryCatalogDataResponse;
        return this;
    }
    public Object serverException;
    public PutRegistryCatalogDataResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public PutRegistryCatalogDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedCommandException;
    public PutRegistryCatalogDataResponse withUnsupportedCommandException(Object unsupportedCommandException) {
        this.unsupportedCommandException = unsupportedCommandException;
        return this;
    }
}