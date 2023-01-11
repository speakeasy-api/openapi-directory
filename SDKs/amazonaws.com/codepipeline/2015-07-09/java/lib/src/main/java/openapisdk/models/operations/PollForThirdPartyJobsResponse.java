package openapisdk.models.operations;



public class PollForThirdPartyJobsResponse {
    public Object actionTypeNotFoundException;
    public PollForThirdPartyJobsResponse withActionTypeNotFoundException(Object actionTypeNotFoundException) {
        this.actionTypeNotFoundException = actionTypeNotFoundException;
        return this;
    }
    public String contentType;
    public PollForThirdPartyJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PollForThirdPartyJobsOutput pollForThirdPartyJobsOutput;
    public PollForThirdPartyJobsResponse withPollForThirdPartyJobsOutput(openapisdk.models.shared.PollForThirdPartyJobsOutput pollForThirdPartyJobsOutput) {
        this.pollForThirdPartyJobsOutput = pollForThirdPartyJobsOutput;
        return this;
    }
    public Long statusCode;
    public PollForThirdPartyJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PollForThirdPartyJobsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}