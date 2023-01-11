package openapisdk.models.operations;



public class GetAemHealthCheckResponse {
    public String contentType;
    public GetAemHealthCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAemHealthCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getAemHealthCheckDefaultApplicationJSONString;
    public GetAemHealthCheckResponse withGetAemHealthCheckDefaultApplicationJsonString(String getAemHealthCheckDefaultApplicationJSONString) {
        this.getAemHealthCheckDefaultApplicationJSONString = getAemHealthCheckDefaultApplicationJSONString;
        return this;
    }
}