package openapisdk.models.shared;



/**
 * GenerateCredentialReportResponse
 * Contains the response to a successful <a>GenerateCredentialReport</a> request. 
**/
public class GenerateCredentialReportResponse {
    public String description;
    public GenerateCredentialReportResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    public ReportStateTypeEnum state;
    public GenerateCredentialReportResponse withState(ReportStateTypeEnum state) {
        this.state = state;
        return this;
    }
}