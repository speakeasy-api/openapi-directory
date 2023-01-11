package openapisdk.models.operations;



public class GetScheduleTemplatesResponse {
    public String contentType;
    public GetScheduleTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleTemplateCollection scheduleTemplateCollection;
    public GetScheduleTemplatesResponse withScheduleTemplateCollection(openapisdk.models.shared.ScheduleTemplateCollection scheduleTemplateCollection) {
        this.scheduleTemplateCollection = scheduleTemplateCollection;
        return this;
    }
    public Long statusCode;
    public GetScheduleTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}