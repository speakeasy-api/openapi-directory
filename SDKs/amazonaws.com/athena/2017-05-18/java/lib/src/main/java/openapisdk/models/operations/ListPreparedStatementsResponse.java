package openapisdk.models.operations;



public class ListPreparedStatementsResponse {
    public String contentType;
    public ListPreparedStatementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListPreparedStatementsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public ListPreparedStatementsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListPreparedStatementsOutput listPreparedStatementsOutput;
    public ListPreparedStatementsResponse withListPreparedStatementsOutput(openapisdk.models.shared.ListPreparedStatementsOutput listPreparedStatementsOutput) {
        this.listPreparedStatementsOutput = listPreparedStatementsOutput;
        return this;
    }
    public Long statusCode;
    public ListPreparedStatementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}