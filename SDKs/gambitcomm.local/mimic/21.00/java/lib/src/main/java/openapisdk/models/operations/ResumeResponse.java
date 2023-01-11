package openapisdk.models.operations;



public class ResumeResponse {
    public String contentType;
    public ResumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ResumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String resume200ApplicationJSONString;
    public ResumeResponse withResume200ApplicationJsonString(String resume200ApplicationJSONString) {
        this.resume200ApplicationJSONString = resume200ApplicationJSONString;
        return this;
    }
}