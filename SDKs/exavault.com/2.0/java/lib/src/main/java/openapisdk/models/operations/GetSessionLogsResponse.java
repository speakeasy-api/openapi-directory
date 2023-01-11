package openapisdk.models.operations;



public class GetSessionLogsResponse {
    public String contentType;
    public GetSessionLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SessionActivityResponse sessionActivityResponse;
    public GetSessionLogsResponse withSessionActivityResponse(openapisdk.models.shared.SessionActivityResponse sessionActivityResponse) {
        this.sessionActivityResponse = sessionActivityResponse;
        return this;
    }
    public Long statusCode;
    public GetSessionLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}