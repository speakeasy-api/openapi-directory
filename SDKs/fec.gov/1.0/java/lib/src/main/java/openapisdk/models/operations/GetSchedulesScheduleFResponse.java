package openapisdk.models.operations;



public class GetSchedulesScheduleFResponse {
    public String contentType;
    public GetSchedulesScheduleFResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleFResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSchedulesScheduleFDefaultApplicationJson getSchedulesScheduleFDefaultApplicationJSONObject;
    public GetSchedulesScheduleFResponse withGetSchedulesScheduleFDefaultApplicationJsonObject(GetSchedulesScheduleFDefaultApplicationJson getSchedulesScheduleFDefaultApplicationJSONObject) {
        this.getSchedulesScheduleFDefaultApplicationJSONObject = getSchedulesScheduleFDefaultApplicationJSONObject;
        return this;
    }
}