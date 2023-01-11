package openapisdk.models.operations;



public class CodeScanningListAlertsForRepoResponse {
    public String contentType;
    public CodeScanningListAlertsForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CodeScanningListAlertsForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public CodeScanningListAlertsForRepoResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CodeScanningAlertItems[] codeScanningAlertItems;
    public CodeScanningListAlertsForRepoResponse withCodeScanningAlertItems(openapisdk.models.shared.CodeScanningAlertItems[] codeScanningAlertItems) {
        this.codeScanningAlertItems = codeScanningAlertItems;
        return this;
    }
    public CodeScanningListAlertsForRepo503ApplicationJson codeScanningListAlertsForRepo503ApplicationJSONObject;
    public CodeScanningListAlertsForRepoResponse withCodeScanningListAlertsForRepo503ApplicationJsonObject(CodeScanningListAlertsForRepo503ApplicationJson codeScanningListAlertsForRepo503ApplicationJSONObject) {
        this.codeScanningListAlertsForRepo503ApplicationJSONObject = codeScanningListAlertsForRepo503ApplicationJSONObject;
        return this;
    }
}