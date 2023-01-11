package openapisdk.models.operations;



public class DeleteLexiconResponse {
    public String contentType;
    public DeleteLexiconResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteLexiconOutput;
    public DeleteLexiconResponse withDeleteLexiconOutput(java.util.Map<String, Object> deleteLexiconOutput) {
        this.deleteLexiconOutput = deleteLexiconOutput;
        return this;
    }
    public Object lexiconNotFoundException;
    public DeleteLexiconResponse withLexiconNotFoundException(Object lexiconNotFoundException) {
        this.lexiconNotFoundException = lexiconNotFoundException;
        return this;
    }
    public Object serviceFailureException;
    public DeleteLexiconResponse withServiceFailureException(Object serviceFailureException) {
        this.serviceFailureException = serviceFailureException;
        return this;
    }
    public Long statusCode;
    public DeleteLexiconResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}