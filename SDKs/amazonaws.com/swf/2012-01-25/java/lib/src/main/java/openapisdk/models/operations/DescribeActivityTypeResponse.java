package openapisdk.models.operations;



public class DescribeActivityTypeResponse {
    public openapisdk.models.shared.ActivityTypeDetail activityTypeDetail;
    public DescribeActivityTypeResponse withActivityTypeDetail(openapisdk.models.shared.ActivityTypeDetail activityTypeDetail) {
        this.activityTypeDetail = activityTypeDetail;
        return this;
    }
    public String contentType;
    public DescribeActivityTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object operationNotPermittedFault;
    public DescribeActivityTypeResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public DescribeActivityTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public DescribeActivityTypeResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}