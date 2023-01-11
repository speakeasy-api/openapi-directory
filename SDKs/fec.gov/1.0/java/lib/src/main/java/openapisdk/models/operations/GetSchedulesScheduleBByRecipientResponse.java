package openapisdk.models.operations;



public class GetSchedulesScheduleBByRecipientResponse {
    public String contentType;
    public GetSchedulesScheduleBByRecipientResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleBByRecipientPage scheduleBByRecipientPage;
    public GetSchedulesScheduleBByRecipientResponse withScheduleBByRecipientPage(openapisdk.models.shared.ScheduleBByRecipientPage scheduleBByRecipientPage) {
        this.scheduleBByRecipientPage = scheduleBByRecipientPage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleBByRecipientResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}