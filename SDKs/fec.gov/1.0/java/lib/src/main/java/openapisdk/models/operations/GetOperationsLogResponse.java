package openapisdk.models.operations;



public class GetOperationsLogResponse {
    public String contentType;
    public GetOperationsLogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OperationsLogPage operationsLogPage;
    public GetOperationsLogResponse withOperationsLogPage(openapisdk.models.shared.OperationsLogPage operationsLogPage) {
        this.operationsLogPage = operationsLogPage;
        return this;
    }
    public Long statusCode;
    public GetOperationsLogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}