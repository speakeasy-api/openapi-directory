package openapisdk.models.operations;



public class GetCalendarDatesResponse {
    public openapisdk.models.shared.CalendarDatePage calendarDatePage;
    public GetCalendarDatesResponse withCalendarDatePage(openapisdk.models.shared.CalendarDatePage calendarDatePage) {
        this.calendarDatePage = calendarDatePage;
        return this;
    }
    public String contentType;
    public GetCalendarDatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCalendarDatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}