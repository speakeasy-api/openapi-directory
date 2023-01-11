package openapisdk.models.operations;



public class ListSignalingChannelsResponse {
    public Object accessDeniedException;
    public ListSignalingChannelsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientLimitExceededException;
    public ListSignalingChannelsResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public ListSignalingChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public ListSignalingChannelsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public openapisdk.models.shared.ListSignalingChannelsOutput listSignalingChannelsOutput;
    public ListSignalingChannelsResponse withListSignalingChannelsOutput(openapisdk.models.shared.ListSignalingChannelsOutput listSignalingChannelsOutput) {
        this.listSignalingChannelsOutput = listSignalingChannelsOutput;
        return this;
    }
    public Long statusCode;
    public ListSignalingChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}