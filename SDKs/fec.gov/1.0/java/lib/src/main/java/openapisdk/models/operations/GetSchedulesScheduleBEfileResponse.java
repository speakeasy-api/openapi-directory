package openapisdk.models.operations;



public class GetSchedulesScheduleBEfileResponse {
    public String contentType;
    public GetSchedulesScheduleBEfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleBEfilePage scheduleBEfilePage;
    public GetSchedulesScheduleBEfileResponse withScheduleBEfilePage(openapisdk.models.shared.ScheduleBEfilePage scheduleBEfilePage) {
        this.scheduleBEfilePage = scheduleBEfilePage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleBEfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}