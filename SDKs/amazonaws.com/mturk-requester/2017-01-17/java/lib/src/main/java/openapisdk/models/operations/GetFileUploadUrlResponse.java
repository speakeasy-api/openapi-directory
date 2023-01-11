package openapisdk.models.operations;



public class GetFileUploadUrlResponse {
    public String contentType;
    public GetFileUploadUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFileUploadUrlResponse getFileUploadURLResponse;
    public GetFileUploadUrlResponse withGetFileUploadUrlResponse(openapisdk.models.shared.GetFileUploadUrlResponse getFileUploadURLResponse) {
        this.getFileUploadURLResponse = getFileUploadURLResponse;
        return this;
    }
    public Object requestError;
    public GetFileUploadUrlResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public GetFileUploadUrlResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public GetFileUploadUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}