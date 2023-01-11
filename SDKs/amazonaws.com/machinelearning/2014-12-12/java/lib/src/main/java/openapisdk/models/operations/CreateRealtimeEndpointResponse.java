package openapisdk.models.operations;



public class CreateRealtimeEndpointResponse {
    public String contentType;
    public CreateRealtimeEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRealtimeEndpointOutput createRealtimeEndpointOutput;
    public CreateRealtimeEndpointResponse withCreateRealtimeEndpointOutput(openapisdk.models.shared.CreateRealtimeEndpointOutput createRealtimeEndpointOutput) {
        this.createRealtimeEndpointOutput = createRealtimeEndpointOutput;
        return this;
    }
    public Object internalServerException;
    public CreateRealtimeEndpointResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public CreateRealtimeEndpointResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateRealtimeEndpointResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateRealtimeEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}