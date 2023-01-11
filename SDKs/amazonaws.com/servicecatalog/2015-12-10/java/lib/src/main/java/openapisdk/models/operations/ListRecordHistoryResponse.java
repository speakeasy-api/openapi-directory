package openapisdk.models.operations;



public class ListRecordHistoryResponse {
    public String contentType;
    public ListRecordHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListRecordHistoryResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListRecordHistoryOutput listRecordHistoryOutput;
    public ListRecordHistoryResponse withListRecordHistoryOutput(openapisdk.models.shared.ListRecordHistoryOutput listRecordHistoryOutput) {
        this.listRecordHistoryOutput = listRecordHistoryOutput;
        return this;
    }
    public Long statusCode;
    public ListRecordHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}