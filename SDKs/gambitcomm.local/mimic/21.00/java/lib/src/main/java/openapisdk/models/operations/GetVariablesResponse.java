package openapisdk.models.operations;



public class GetVariablesResponse {
    public String contentType;
    public GetVariablesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVariablesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getVariables200ApplicationJSONStrings;
    public GetVariablesResponse withGetVariables200ApplicationJsonStrings(String[] getVariables200ApplicationJSONStrings) {
        this.getVariables200ApplicationJSONStrings = getVariables200ApplicationJSONStrings;
        return this;
    }
}