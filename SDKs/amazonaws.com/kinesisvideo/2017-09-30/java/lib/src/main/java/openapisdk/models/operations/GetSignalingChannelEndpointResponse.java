package openapisdk.models.operations;



public class GetSignalingChannelEndpointResponse {
    public Object accessDeniedException;
    public GetSignalingChannelEndpointResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientLimitExceededException;
    public GetSignalingChannelEndpointResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public GetSignalingChannelEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSignalingChannelEndpointOutput getSignalingChannelEndpointOutput;
    public GetSignalingChannelEndpointResponse withGetSignalingChannelEndpointOutput(openapisdk.models.shared.GetSignalingChannelEndpointOutput getSignalingChannelEndpointOutput) {
        this.getSignalingChannelEndpointOutput = getSignalingChannelEndpointOutput;
        return this;
    }
    public Object invalidArgumentException;
    public GetSignalingChannelEndpointResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceInUseException;
    public GetSignalingChannelEndpointResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetSignalingChannelEndpointResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetSignalingChannelEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}