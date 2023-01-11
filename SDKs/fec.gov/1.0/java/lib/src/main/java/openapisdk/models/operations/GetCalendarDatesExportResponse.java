package openapisdk.models.operations;



public class GetCalendarDatesExportResponse {
    public openapisdk.models.shared.CalendarDatePage calendarDatePage;
    public GetCalendarDatesExportResponse withCalendarDatePage(openapisdk.models.shared.CalendarDatePage calendarDatePage) {
        this.calendarDatePage = calendarDatePage;
        return this;
    }
    public String contentType;
    public GetCalendarDatesExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCalendarDatesExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}