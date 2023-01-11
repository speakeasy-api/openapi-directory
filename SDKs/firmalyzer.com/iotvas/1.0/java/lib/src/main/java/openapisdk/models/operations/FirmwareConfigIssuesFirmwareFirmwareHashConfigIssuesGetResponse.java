package openapisdk.models.operations;



public class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse {
    public openapisdk.models.shared.ConfigIssue[] configIssues;
    public FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse withConfigIssues(openapisdk.models.shared.ConfigIssue[] configIssues) {
        this.configIssues = configIssues;
        return this;
    }
    public String contentType;
    public FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}