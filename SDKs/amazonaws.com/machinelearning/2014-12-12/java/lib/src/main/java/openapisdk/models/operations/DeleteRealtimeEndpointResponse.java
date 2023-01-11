package openapisdk.models.operations;



public class DeleteRealtimeEndpointResponse {
    public String contentType;
    public DeleteRealtimeEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteRealtimeEndpointOutput deleteRealtimeEndpointOutput;
    public DeleteRealtimeEndpointResponse withDeleteRealtimeEndpointOutput(openapisdk.models.shared.DeleteRealtimeEndpointOutput deleteRealtimeEndpointOutput) {
        this.deleteRealtimeEndpointOutput = deleteRealtimeEndpointOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteRealtimeEndpointResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public DeleteRealtimeEndpointResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteRealtimeEndpointResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteRealtimeEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}