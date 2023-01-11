package openapisdk.models.operations;



public class ListStreamsResponse {
    public String contentType;
    public ListStreamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListStreamsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
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