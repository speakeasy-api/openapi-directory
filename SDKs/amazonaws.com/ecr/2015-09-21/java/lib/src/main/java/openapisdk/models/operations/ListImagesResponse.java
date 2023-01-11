package openapisdk.models.operations;



public class ListImagesResponse {
    public String contentType;
    public ListImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListImagesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListImagesResponse listImagesResponse;
    public ListImagesResponse withListImagesResponse(openapisdk.models.shared.ListImagesResponse listImagesResponse) {
        this.listImagesResponse = listImagesResponse;
        return this;
    }
    public Object repositoryNotFoundException;
    public ListImagesResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public ListImagesResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public ListImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}