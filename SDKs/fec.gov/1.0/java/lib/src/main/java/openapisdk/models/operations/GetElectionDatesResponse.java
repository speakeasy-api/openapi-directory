package openapisdk.models.operations;



public class GetElectionDatesResponse {
    public String contentType;
    public GetElectionDatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetElectionDatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetElectionDatesDefaultApplicationJson getElectionDatesDefaultApplicationJSONObject;
    public GetElectionDatesResponse withGetElectionDatesDefaultApplicationJsonObject(GetElectionDatesDefaultApplicationJson getElectionDatesDefaultApplicationJSONObject) {
        this.getElectionDatesDefaultApplicationJSONObject = getElectionDatesDefaultApplicationJSONObject;
        return this;
    }
}