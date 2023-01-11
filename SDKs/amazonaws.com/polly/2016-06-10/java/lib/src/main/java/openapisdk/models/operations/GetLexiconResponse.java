package openapisdk.models.operations;



public class GetLexiconResponse {
    public String contentType;
    public GetLexiconResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLexiconOutput getLexiconOutput;
    public GetLexiconResponse withGetLexiconOutput(openapisdk.models.shared.GetLexiconOutput getLexiconOutput) {
        this.getLexiconOutput = getLexiconOutput;
        return this;
    }
    public Object lexiconNotFoundException;
    public GetLexiconResponse withLexiconNotFoundException(Object lexiconNotFoundException) {
        this.lexiconNotFoundException = lexiconNotFoundException;
        return this;
    }
    public Object serviceFailureException;
    public GetLexiconResponse withServiceFailureException(Object serviceFailureException) {
        this.serviceFailureException = serviceFailureException;
        return this;
    }
    public Long statusCode;
    public GetLexiconResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}