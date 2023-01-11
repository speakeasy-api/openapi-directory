package openapisdk.models.operations;



public class ListStreamsResponse {
    public Object clientLimitExceededException;
    public ListStreamsResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public ListStreamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public ListStreamsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public openapisdk.models.shared.ListStreamsOutput listStreamsOutput;
    public ListStreamsResponse withListStreamsOutput(openapisdk.models.shared.ListStreamsOutput listStreamsOutput) {
        this.listStreamsOutput = listStreamsOutput;
        return this;
    }
    public Long statusCode;
    public ListStreamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}