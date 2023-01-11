package openapisdk.models.operations;



public class DeleteTargetResponse {
    public String contentType;
    public DeleteTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteTargetResult;
    public DeleteTargetResponse withDeleteTargetResult(java.util.Map<String, Object> deleteTargetResult) {
        this.deleteTargetResult = deleteTargetResult;
        return this;
    }
    public Long statusCode;
    public DeleteTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteTargetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}