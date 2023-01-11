package openapisdk.models.operations;



public class ListTablesResponse {
    public String contentType;
    public ListTablesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public ListTablesResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public openapisdk.models.shared.ListTablesOutput listTablesOutput;
    public ListTablesResponse withListTablesOutput(openapisdk.models.shared.ListTablesOutput listTablesOutput) {
        this.listTablesOutput = listTablesOutput;
        return this;
    }
    public Long statusCode;
    public ListTablesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}