package openapisdk.models.operations;



public class GetCalendarResponse {
    public String contentType;
    public GetCalendarResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCalendarResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Week[] weeks;
    public GetCalendarResponse withWeeks(openapisdk.models.shared.Week[] weeks) {
        this.weeks = weeks;
        return this;
    }
}