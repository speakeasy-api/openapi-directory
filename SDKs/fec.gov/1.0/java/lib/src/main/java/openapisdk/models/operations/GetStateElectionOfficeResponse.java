package openapisdk.models.operations;



public class GetStateElectionOfficeResponse {
    public String contentType;
    public GetStateElectionOfficeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.StateElectionOfficeInfoPage stateElectionOfficeInfoPage;
    public GetStateElectionOfficeResponse withStateElectionOfficeInfoPage(openapisdk.models.shared.StateElectionOfficeInfoPage stateElectionOfficeInfoPage) {
        this.stateElectionOfficeInfoPage = stateElectionOfficeInfoPage;
        return this;
    }
    public Long statusCode;
    public GetStateElectionOfficeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}