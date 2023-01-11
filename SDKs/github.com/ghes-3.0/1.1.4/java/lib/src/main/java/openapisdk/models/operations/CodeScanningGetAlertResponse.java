package openapisdk.models.operations;



public class CodeScanningGetAlertResponse {
    public String contentType;
    public CodeScanningGetAlertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CodeScanningGetAlertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public CodeScanningGetAlertResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CodeScanningAlert codeScanningAlert;
    public CodeScanningGetAlertResponse withCodeScanningAlert(openapisdk.models.shared.CodeScanningAlert codeScanningAlert) {
        this.codeScanningAlert = codeScanningAlert;
        return this;
    }
    public CodeScanningGetAlert503ApplicationJson codeScanningGetAlert503ApplicationJSONObject;
    public CodeScanningGetAlertResponse withCodeScanningGetAlert503ApplicationJsonObject(CodeScanningGetAlert503ApplicationJson codeScanningGetAlert503ApplicationJSONObject) {
        this.codeScanningGetAlert503ApplicationJSONObject = codeScanningGetAlert503ApplicationJSONObject;
        return this;
    }
}