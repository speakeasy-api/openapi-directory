package openapisdk.models.operations;



public class ListTargetsResponse {
    public String contentType;
    public ListTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListTargetsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListTargetsResult listTargetsResult;
    public ListTargetsResponse withListTargetsResult(openapisdk.models.shared.ListTargetsResult listTargetsResult) {
        this.listTargetsResult = listTargetsResult;
        return this;
    }
    public Long statusCode;
    public ListTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListTargetsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}