package openapisdk.models.operations;



public class GetSchedulesScheduleBByRecipientIdResponse {
    public String contentType;
    public GetSchedulesScheduleBByRecipientIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleBByRecipientIdPage scheduleBByRecipientIDPage;
    public GetSchedulesScheduleBByRecipientIdResponse withScheduleBByRecipientIdPage(openapisdk.models.shared.ScheduleBByRecipientIdPage scheduleBByRecipientIDPage) {
        this.scheduleBByRecipientIDPage = scheduleBByRecipientIDPage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleBByRecipientIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}