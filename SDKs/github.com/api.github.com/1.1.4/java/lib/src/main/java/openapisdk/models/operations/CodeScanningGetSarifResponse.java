package openapisdk.models.operations;



public class CodeScanningGetSarifResponse {
    public String contentType;
    public CodeScanningGetSarifResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CodeScanningGetSarifResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public CodeScanningGetSarifResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CodeScanningSarifsStatus codeScanningSarifsStatus;
    public CodeScanningGetSarifResponse withCodeScanningSarifsStatus(openapisdk.models.shared.CodeScanningSarifsStatus codeScanningSarifsStatus) {
        this.codeScanningSarifsStatus = codeScanningSarifsStatus;
        return this;
    }
    public CodeScanningGetSarif503ApplicationJson codeScanningGetSarif503ApplicationJSONObject;
    public CodeScanningGetSarifResponse withCodeScanningGetSarif503ApplicationJsonObject(CodeScanningGetSarif503ApplicationJson codeScanningGetSarif503ApplicationJSONObject) {
        this.codeScanningGetSarif503ApplicationJSONObject = codeScanningGetSarif503ApplicationJSONObject;
        return this;
    }
}