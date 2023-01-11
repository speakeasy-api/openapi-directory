package openapisdk.models.operations;



public class ListRobotApplicationsResponse {
    public String contentType;
    public ListRobotApplicationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListRobotApplicationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public ListRobotApplicationsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListRobotApplicationsResponse listRobotApplicationsResponse;
    public ListRobotApplicationsResponse withListRobotApplicationsResponse(openapisdk.models.shared.ListRobotApplicationsResponse listRobotApplicationsResponse) {
        this.listRobotApplicationsResponse = listRobotApplicationsResponse;
        return this;
    }
    public Long statusCode;
    public ListRobotApplicationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListRobotApplicationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}