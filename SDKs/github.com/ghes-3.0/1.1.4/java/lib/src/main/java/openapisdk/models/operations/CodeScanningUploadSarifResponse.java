package openapisdk.models.operations;



public class CodeScanningUploadSarifResponse {
    public String contentType;
    public CodeScanningUploadSarifResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CodeScanningUploadSarifResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public CodeScanningUploadSarifResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CodeScanningSarifsReceipt codeScanningSarifsReceipt;
    public CodeScanningUploadSarifResponse withCodeScanningSarifsReceipt(openapisdk.models.shared.CodeScanningSarifsReceipt codeScanningSarifsReceipt) {
        this.codeScanningSarifsReceipt = codeScanningSarifsReceipt;
        return this;
    }
    public CodeScanningUploadSarif503ApplicationJson codeScanningUploadSarif503ApplicationJSONObject;
    public CodeScanningUploadSarifResponse withCodeScanningUploadSarif503ApplicationJsonObject(CodeScanningUploadSarif503ApplicationJson codeScanningUploadSarif503ApplicationJSONObject) {
        this.codeScanningUploadSarif503ApplicationJSONObject = codeScanningUploadSarif503ApplicationJSONObject;
        return this;
    }
}