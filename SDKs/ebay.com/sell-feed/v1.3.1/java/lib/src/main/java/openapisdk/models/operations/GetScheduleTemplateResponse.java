package openapisdk.models.operations;



public class GetScheduleTemplateResponse {
    public String contentType;
    public GetScheduleTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleTemplateResponse scheduleTemplateResponse;
    public GetScheduleTemplateResponse withScheduleTemplateResponse(openapisdk.models.shared.ScheduleTemplateResponse scheduleTemplateResponse) {
        this.scheduleTemplateResponse = scheduleTemplateResponse;
        return this;
    }
    public Long statusCode;
    public GetScheduleTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}