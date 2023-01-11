package openapisdk.models.operations;



public class GetDownloadUrlForLayerResponse {
    public String contentType;
    public GetDownloadUrlForLayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDownloadUrlForLayerResponse getDownloadUrlForLayerResponse;
    public GetDownloadUrlForLayerResponse withGetDownloadUrlForLayerResponse(openapisdk.models.shared.GetDownloadUrlForLayerResponse getDownloadUrlForLayerResponse) {
        this.getDownloadUrlForLayerResponse = getDownloadUrlForLayerResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetDownloadUrlForLayerResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object layerInaccessibleException;
    public GetDownloadUrlForLayerResponse withLayerInaccessibleException(Object layerInaccessibleException) {
        this.layerInaccessibleException = layerInaccessibleException;
        return this;
    }
    public Object layersNotFoundException;
    public GetDownloadUrlForLayerResponse withLayersNotFoundException(Object layersNotFoundException) {
        this.layersNotFoundException = layersNotFoundException;
        return this;
    }
    public Object repositoryNotFoundException;
    public GetDownloadUrlForLayerResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public GetDownloadUrlForLayerResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public GetDownloadUrlForLayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}