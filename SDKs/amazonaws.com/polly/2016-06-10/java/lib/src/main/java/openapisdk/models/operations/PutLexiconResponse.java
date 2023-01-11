package openapisdk.models.operations;



public class PutLexiconResponse {
    public String contentType;
    public PutLexiconResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidLexiconException;
    public PutLexiconResponse withInvalidLexiconException(Object invalidLexiconException) {
        this.invalidLexiconException = invalidLexiconException;
        return this;
    }
    public Object lexiconSizeExceededException;
    public PutLexiconResponse withLexiconSizeExceededException(Object lexiconSizeExceededException) {
        this.lexiconSizeExceededException = lexiconSizeExceededException;
        return this;
    }
    public Object maxLexemeLengthExceededException;
    public PutLexiconResponse withMaxLexemeLengthExceededException(Object maxLexemeLengthExceededException) {
        this.maxLexemeLengthExceededException = maxLexemeLengthExceededException;
        return this;
    }
    public Object maxLexiconsNumberExceededException;
    public PutLexiconResponse withMaxLexiconsNumberExceededException(Object maxLexiconsNumberExceededException) {
        this.maxLexiconsNumberExceededException = maxLexiconsNumberExceededException;
        return this;
    }
    public java.util.Map<String, Object> putLexiconOutput;
    public PutLexiconResponse withPutLexiconOutput(java.util.Map<String, Object> putLexiconOutput) {
        this.putLexiconOutput = putLexiconOutput;
        return this;
    }
    public Object serviceFailureException;
    public PutLexiconResponse withServiceFailureException(Object serviceFailureException) {
        this.serviceFailureException = serviceFailureException;
        return this;
    }
    public Long statusCode;
    public PutLexiconResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedPlsAlphabetException;
    public PutLexiconResponse withUnsupportedPlsAlphabetException(Object unsupportedPlsAlphabetException) {
        this.unsupportedPlsAlphabetException = unsupportedPlsAlphabetException;
        return this;
    }
    public Object unsupportedPlsLanguageException;
    public PutLexiconResponse withUnsupportedPlsLanguageException(Object unsupportedPlsLanguageException) {
        this.unsupportedPlsLanguageException = unsupportedPlsLanguageException;
        return this;
    }
}