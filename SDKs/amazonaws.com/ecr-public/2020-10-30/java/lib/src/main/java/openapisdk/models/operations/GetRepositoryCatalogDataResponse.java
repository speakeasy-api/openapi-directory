package openapisdk.models.operations;



public class GetRepositoryCatalogDataResponse {
    public String contentType;
    public GetRepositoryCatalogDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRepositoryCatalogDataResponse getRepositoryCatalogDataResponse;
    public GetRepositoryCatalogDataResponse withGetRepositoryCatalogDataResponse(openapisdk.models.shared.GetRepositoryCatalogDataResponse getRepositoryCatalogDataResponse) {
        this.getRepositoryCatalogDataResponse = getRepositoryCatalogDataResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetRepositoryCatalogDataResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object repositoryNotFoundException;
    public GetRepositoryCatalogDataResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public GetRepositoryCatalogDataResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public GetRepositoryCatalogDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}