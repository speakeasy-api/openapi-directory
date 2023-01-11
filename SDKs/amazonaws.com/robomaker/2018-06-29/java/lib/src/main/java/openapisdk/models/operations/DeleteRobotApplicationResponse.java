package openapisdk.models.operations;



public class DeleteRobotApplicationResponse {
    public String contentType;
    public DeleteRobotApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteRobotApplicationResponse;
    public DeleteRobotApplicationResponse withDeleteRobotApplicationResponse(java.util.Map<String, Object> deleteRobotApplicationResponse) {
        this.deleteRobotApplicationResponse = deleteRobotApplicationResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteRobotApplicationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteRobotApplicationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public DeleteRobotApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteRobotApplicationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}