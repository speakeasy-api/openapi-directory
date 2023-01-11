package openapisdk.models.operations;



public class GetSchedulesResponse {
    public String contentType;
    public GetSchedulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSchedulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserScheduleCollection userScheduleCollection;
    public GetSchedulesResponse withUserScheduleCollection(openapisdk.models.shared.UserScheduleCollection userScheduleCollection) {
        this.userScheduleCollection = userScheduleCollection;
        return this;
    }
}