package openapisdk.models.operations;



public class ListOperationsForConnectionResponse {
    public String contentType;
    public ListOperationsForConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public ListOperationsForConnectionResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public ListOperationsForConnectionResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.OperationReadList operationReadList;
    public ListOperationsForConnectionResponse withOperationReadList(openapisdk.models.shared.OperationReadList operationReadList) {
        this.operationReadList = operationReadList;
        return this;
    }
    public Long statusCode;
    public ListOperationsForConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}