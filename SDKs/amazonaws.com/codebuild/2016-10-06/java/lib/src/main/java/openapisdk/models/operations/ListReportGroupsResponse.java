package openapisdk.models.operations;



public class ListReportGroupsResponse {
    public String contentType;
    public ListReportGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListReportGroupsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListReportGroupsOutput listReportGroupsOutput;
    public ListReportGroupsResponse withListReportGroupsOutput(openapisdk.models.shared.ListReportGroupsOutput listReportGroupsOutput) {
        this.listReportGroupsOutput = listReportGroupsOutput;
        return this;
    }
    public Long statusCode;
    public ListReportGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}