package openapisdk.models.operations;



public class GetSchedulesScheduleAByStateTotalsResponse {
    public String contentType;
    public GetSchedulesScheduleAByStateTotalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleAByStateRecipientTotalsPage scheduleAByStateRecipientTotalsPage;
    public GetSchedulesScheduleAByStateTotalsResponse withScheduleAByStateRecipientTotalsPage(openapisdk.models.shared.ScheduleAByStateRecipientTotalsPage scheduleAByStateRecipientTotalsPage) {
        this.scheduleAByStateRecipientTotalsPage = scheduleAByStateRecipientTotalsPage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleAByStateTotalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}