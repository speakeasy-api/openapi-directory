package openapisdk.models.operations;



public class PollForJobsResponse {
    public Object actionTypeNotFoundException;
    public PollForJobsResponse withActionTypeNotFoundException(Object actionTypeNotFoundException) {
        this.actionTypeNotFoundException = actionTypeNotFoundException;
        return this;
    }
    public String contentType;
    public PollForJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PollForJobsOutput pollForJobsOutput;
    public PollForJobsResponse withPollForJobsOutput(openapisdk.models.shared.PollForJobsOutput pollForJobsOutput) {
        this.pollForJobsOutput = pollForJobsOutput;
        return this;
    }
    public Long statusCode;
    public PollForJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PollForJobsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}