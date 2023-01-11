package openapisdk.models.operations;



public class DeleteRobotResponse {
    public String contentType;
    public DeleteRobotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteRobotResponse;
    public DeleteRobotResponse withDeleteRobotResponse(java.util.Map<String, Object> deleteRobotResponse) {
        this.deleteRobotResponse = deleteRobotResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteRobotResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteRobotResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public DeleteRobotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteRobotResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}