package openapisdk.models.operations;



public class DeleteQualificationTypeResponse {
    public String contentType;
    public DeleteQualificationTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteQualificationTypeResponse;
    public DeleteQualificationTypeResponse withDeleteQualificationTypeResponse(java.util.Map<String, Object> deleteQualificationTypeResponse) {
        this.deleteQualificationTypeResponse = deleteQualificationTypeResponse;
        return this;
    }
    public Object requestError;
    public DeleteQualificationTypeResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public DeleteQualificationTypeResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public DeleteQualificationTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}