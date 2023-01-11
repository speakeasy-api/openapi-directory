package openapisdk.models.operations;



public class IssuesListLabelsForMilestoneResponse {
    public String contentType;
    public IssuesListLabelsForMilestoneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public IssuesListLabelsForMilestoneResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public IssuesListLabelsForMilestoneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Label[] labels;
    public IssuesListLabelsForMilestoneResponse withLabels(openapisdk.models.shared.Label[] labels) {
        this.labels = labels;
        return this;
    }
}