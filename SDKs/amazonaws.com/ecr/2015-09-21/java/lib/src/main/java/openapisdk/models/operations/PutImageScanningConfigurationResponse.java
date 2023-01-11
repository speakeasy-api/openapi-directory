package openapisdk.models.operations;



public class PutImageScanningConfigurationResponse {
    public String contentType;
    public PutImageScanningConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutImageScanningConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.PutImageScanningConfigurationResponse putImageScanningConfigurationResponse;
    public PutImageScanningConfigurationResponse withPutImageScanningConfigurationResponse(openapisdk.models.shared.PutImageScanningConfigurationResponse putImageScanningConfigurationResponse) {
        this.putImageScanningConfigurationResponse = putImageScanningConfigurationResponse;
        return this;
    }
    public Object repositoryNotFoundException;
    public PutImageScanningConfigurationResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public PutImageScanningConfigurationResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public PutImageScanningConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}