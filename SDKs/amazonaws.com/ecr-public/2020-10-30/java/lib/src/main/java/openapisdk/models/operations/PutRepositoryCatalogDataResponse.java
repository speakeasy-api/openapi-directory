package openapisdk.models.operations;



public class PutRepositoryCatalogDataResponse {
    public String contentType;
    public PutRepositoryCatalogDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutRepositoryCatalogDataResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.PutRepositoryCatalogDataResponse putRepositoryCatalogDataResponse;
    public PutRepositoryCatalogDataResponse withPutRepositoryCatalogDataResponse(openapisdk.models.shared.PutRepositoryCatalogDataResponse putRepositoryCatalogDataResponse) {
        this.putRepositoryCatalogDataResponse = putRepositoryCatalogDataResponse;
        return this;
    }
    public Object repositoryNotFoundException;
    public PutRepositoryCatalogDataResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public PutRepositoryCatalogDataResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public PutRepositoryCatalogDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}