package openapisdk.models.operations;



public class CodeScanningUpdateAlertResponse {
    public String contentType;
    public CodeScanningUpdateAlertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CodeScanningUpdateAlertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public CodeScanningUpdateAlertResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CodeScanningAlert codeScanningAlert;
    public CodeScanningUpdateAlertResponse withCodeScanningAlert(openapisdk.models.shared.CodeScanningAlert codeScanningAlert) {
        this.codeScanningAlert = codeScanningAlert;
        return this;
    }
    public CodeScanningUpdateAlert503ApplicationJson codeScanningUpdateAlert503ApplicationJSONObject;
    public CodeScanningUpdateAlertResponse withCodeScanningUpdateAlert503ApplicationJsonObject(CodeScanningUpdateAlert503ApplicationJson codeScanningUpdateAlert503ApplicationJSONObject) {
        this.codeScanningUpdateAlert503ApplicationJSONObject = codeScanningUpdateAlert503ApplicationJSONObject;
        return this;
    }
}