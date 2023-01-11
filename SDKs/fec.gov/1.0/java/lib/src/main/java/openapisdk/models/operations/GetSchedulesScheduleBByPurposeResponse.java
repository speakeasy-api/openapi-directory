package openapisdk.models.operations;



public class GetSchedulesScheduleBByPurposeResponse {
    public String contentType;
    public GetSchedulesScheduleBByPurposeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleBByPurposePage scheduleBByPurposePage;
    public GetSchedulesScheduleBByPurposeResponse withScheduleBByPurposePage(openapisdk.models.shared.ScheduleBByPurposePage scheduleBByPurposePage) {
        this.scheduleBByPurposePage = scheduleBByPurposePage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleBByPurposeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}