package openapisdk.models.operations;



public class GetSchedulesScheduleBResponse {
    public String contentType;
    public GetSchedulesScheduleBResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleBPage scheduleBPage;
    public GetSchedulesScheduleBResponse withScheduleBPage(openapisdk.models.shared.ScheduleBPage scheduleBPage) {
        this.scheduleBPage = scheduleBPage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleBResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}