package openapisdk.models.operations;



public class ListOutpostsResponse {
    public Object accessDeniedException;
    public ListOutpostsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListOutpostsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListOutpostsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListOutpostsOutput listOutpostsOutput;
    public ListOutpostsResponse withListOutpostsOutput(openapisdk.models.shared.ListOutpostsOutput listOutpostsOutput) {
        this.listOutpostsOutput = listOutpostsOutput;
        return this;
    }
    public Long statusCode;
    public ListOutpostsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListOutpostsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}