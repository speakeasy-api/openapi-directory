package openapisdk.models.operations;



public class ListActivitiesResponse {
    public String contentType;
    public ListActivitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidToken;
    public ListActivitiesResponse withInvalidToken(Object invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public openapisdk.models.shared.ListActivitiesOutput listActivitiesOutput;
    public ListActivitiesResponse withListActivitiesOutput(openapisdk.models.shared.ListActivitiesOutput listActivitiesOutput) {
        this.listActivitiesOutput = listActivitiesOutput;
        return this;
    }
    public Long statusCode;
    public ListActivitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}