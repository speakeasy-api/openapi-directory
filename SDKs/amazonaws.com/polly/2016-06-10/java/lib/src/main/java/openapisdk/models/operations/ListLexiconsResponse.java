package openapisdk.models.operations;



public class ListLexiconsResponse {
    public String contentType;
    public ListLexiconsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListLexiconsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListLexiconsOutput listLexiconsOutput;
    public ListLexiconsResponse withListLexiconsOutput(openapisdk.models.shared.ListLexiconsOutput listLexiconsOutput) {
        this.listLexiconsOutput = listLexiconsOutput;
        return this;
    }
    public Object serviceFailureException;
    public ListLexiconsResponse withServiceFailureException(Object serviceFailureException) {
        this.serviceFailureException = serviceFailureException;
        return this;
    }
    public Long statusCode;
    public ListLexiconsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}