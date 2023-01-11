package openapisdk.models.operations;



public class CreateReportGroupResponse {
    public Object accountLimitExceededException;
    public CreateReportGroupResponse withAccountLimitExceededException(Object accountLimitExceededException) {
        this.accountLimitExceededException = accountLimitExceededException;
        return this;
    }
    public String contentType;
    public CreateReportGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateReportGroupOutput createReportGroupOutput;
    public CreateReportGroupResponse withCreateReportGroupOutput(openapisdk.models.shared.CreateReportGroupOutput createReportGroupOutput) {
        this.createReportGroupOutput = createReportGroupOutput;
        return this;
    }
    public Object invalidInputException;
    public CreateReportGroupResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateReportGroupResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateReportGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}