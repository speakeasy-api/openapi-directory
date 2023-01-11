package openapisdk.models.operations;



public class GetJobManifestResponse {
    public String contentType;
    public GetJobManifestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetJobManifestResult getJobManifestResult;
    public GetJobManifestResponse withGetJobManifestResult(openapisdk.models.shared.GetJobManifestResult getJobManifestResult) {
        this.getJobManifestResult = getJobManifestResult;
        return this;
    }
    public Object invalidJobStateException;
    public GetJobManifestResponse withInvalidJobStateException(Object invalidJobStateException) {
        this.invalidJobStateException = invalidJobStateException;
        return this;
    }
    public Object invalidResourceException;
    public GetJobManifestResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Long statusCode;
    public GetJobManifestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}