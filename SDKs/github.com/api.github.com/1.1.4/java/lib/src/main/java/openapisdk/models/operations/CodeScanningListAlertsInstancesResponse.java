package openapisdk.models.operations;



public class CodeScanningListAlertsInstancesResponse {
    public String contentType;
    public CodeScanningListAlertsInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CodeScanningListAlertsInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public CodeScanningListAlertsInstancesResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CodeScanningAlertInstance[] codeScanningAlertInstances;
    public CodeScanningListAlertsInstancesResponse withCodeScanningAlertInstances(openapisdk.models.shared.CodeScanningAlertInstance[] codeScanningAlertInstances) {
        this.codeScanningAlertInstances = codeScanningAlertInstances;
        return this;
    }
    public CodeScanningListAlertsInstances503ApplicationJson codeScanningListAlertsInstances503ApplicationJSONObject;
    public CodeScanningListAlertsInstancesResponse withCodeScanningListAlertsInstances503ApplicationJsonObject(CodeScanningListAlertsInstances503ApplicationJson codeScanningListAlertsInstances503ApplicationJSONObject) {
        this.codeScanningListAlertsInstances503ApplicationJSONObject = codeScanningListAlertsInstances503ApplicationJSONObject;
        return this;
    }
}