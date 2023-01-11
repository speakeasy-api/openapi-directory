package openapisdk.models.operations;



public class GetScheduleResponse {
    public String contentType;
    public GetScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserScheduleResponse userScheduleResponse;
    public GetScheduleResponse withUserScheduleResponse(openapisdk.models.shared.UserScheduleResponse userScheduleResponse) {
        this.userScheduleResponse = userScheduleResponse;
        return this;
    }
}