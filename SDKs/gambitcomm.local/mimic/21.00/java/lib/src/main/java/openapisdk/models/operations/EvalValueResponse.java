package openapisdk.models.operations;



public class EvalValueResponse {
    public String contentType;
    public EvalValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EvalValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String evalValue200ApplicationJSONString;
    public EvalValueResponse withEvalValue200ApplicationJsonString(String evalValue200ApplicationJSONString) {
        this.evalValue200ApplicationJSONString = evalValue200ApplicationJSONString;
        return this;
    }
}