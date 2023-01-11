package openapisdk.models.operations;



public class GetReportingDatesResponse {
    public String contentType;
    public GetReportingDatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetReportingDatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetReportingDatesDefaultApplicationJson getReportingDatesDefaultApplicationJSONObject;
    public GetReportingDatesResponse withGetReportingDatesDefaultApplicationJsonObject(GetReportingDatesDefaultApplicationJson getReportingDatesDefaultApplicationJSONObject) {
        this.getReportingDatesDefaultApplicationJSONObject = getReportingDatesDefaultApplicationJSONObject;
        return this;
    }
}