package openapisdk.models.operations;



public class ListSharedReportGroupsResponse {
    public String contentType;
    public ListSharedReportGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListSharedReportGroupsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListSharedReportGroupsOutput listSharedReportGroupsOutput;
    public ListSharedReportGroupsResponse withListSharedReportGroupsOutput(openapisdk.models.shared.ListSharedReportGroupsOutput listSharedReportGroupsOutput) {
        this.listSharedReportGroupsOutput = listSharedReportGroupsOutput;
        return this;
    }
    public Long statusCode;
    public ListSharedReportGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}