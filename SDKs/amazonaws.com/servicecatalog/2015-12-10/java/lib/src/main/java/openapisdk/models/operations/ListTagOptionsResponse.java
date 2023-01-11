package openapisdk.models.operations;



public class ListTagOptionsResponse {
    public String contentType;
    public ListTagOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListTagOptionsResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListTagOptionsOutput listTagOptionsOutput;
    public ListTagOptionsResponse withListTagOptionsOutput(openapisdk.models.shared.ListTagOptionsOutput listTagOptionsOutput) {
        this.listTagOptionsOutput = listTagOptionsOutput;
        return this;
    }
    public Long statusCode;
    public ListTagOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOptionNotMigratedException;
    public ListTagOptionsResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
}