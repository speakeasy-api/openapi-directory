package openapisdk.models.operations;



public class ListReportsResponse {
    public String contentType;
    public ListReportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListReportsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListReportsOutput listReportsOutput;
    public ListReportsResponse withListReportsOutput(openapisdk.models.shared.ListReportsOutput listReportsOutput) {
        this.listReportsOutput = listReportsOutput;
        return this;
    }
    public Long statusCode;
    public ListReportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}