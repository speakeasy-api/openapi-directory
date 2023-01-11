package openapisdk.models.operations;



public class ListActivityTypesResponse {
    public openapisdk.models.shared.ActivityTypeInfos activityTypeInfos;
    public ListActivityTypesResponse withActivityTypeInfos(openapisdk.models.shared.ActivityTypeInfos activityTypeInfos) {
        this.activityTypeInfos = activityTypeInfos;
        return this;
    }
    public String contentType;
    public ListActivityTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public ListActivityTypesResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public ListActivityTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public ListActivityTypesResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}