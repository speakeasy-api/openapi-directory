package openapisdk.models.operations;



public class ProblemsListResponse {
    public String contentType;
    public ProblemsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProblemsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ProblemsList200ApplicationJson problemsList200ApplicationJSONObject;
    public ProblemsListResponse withProblemsList200ApplicationJsonObject(ProblemsList200ApplicationJson problemsList200ApplicationJSONObject) {
        this.problemsList200ApplicationJSONObject = problemsList200ApplicationJSONObject;
        return this;
    }
}