package openapisdk.models.operations;



public class CreateHostResponse {
    public String contentType;
    public CreateHostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateHostOutput createHostOutput;
    public CreateHostResponse withCreateHostOutput(openapisdk.models.shared.CreateHostOutput createHostOutput) {
        this.createHostOutput = createHostOutput;
        return this;
    }
    public Object limitExceededException;
    public CreateHostResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateHostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}