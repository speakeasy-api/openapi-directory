package openapisdk.models.operations;



public class GetSchedulesScheduleBSubIdResponse {
    public String contentType;
    public GetSchedulesScheduleBSubIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleBPage scheduleBPage;
    public GetSchedulesScheduleBSubIdResponse withScheduleBPage(openapisdk.models.shared.ScheduleBPage scheduleBPage) {
        this.scheduleBPage = scheduleBPage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleBSubIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}