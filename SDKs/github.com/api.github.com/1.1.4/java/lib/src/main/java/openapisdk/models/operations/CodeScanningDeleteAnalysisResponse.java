package openapisdk.models.operations;



public class CodeScanningDeleteAnalysisResponse {
    public String contentType;
    public CodeScanningDeleteAnalysisResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CodeScanningDeleteAnalysisResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public CodeScanningDeleteAnalysisResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CodeScanningAnalysisDeletion codeScanningAnalysisDeletion;
    public CodeScanningDeleteAnalysisResponse withCodeScanningAnalysisDeletion(openapisdk.models.shared.CodeScanningAnalysisDeletion codeScanningAnalysisDeletion) {
        this.codeScanningAnalysisDeletion = codeScanningAnalysisDeletion;
        return this;
    }
    public CodeScanningDeleteAnalysis503ApplicationJson codeScanningDeleteAnalysis503ApplicationJSONObject;
    public CodeScanningDeleteAnalysisResponse withCodeScanningDeleteAnalysis503ApplicationJsonObject(CodeScanningDeleteAnalysis503ApplicationJson codeScanningDeleteAnalysis503ApplicationJSONObject) {
        this.codeScanningDeleteAnalysis503ApplicationJSONObject = codeScanningDeleteAnalysis503ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ScimError scimError;
    public CodeScanningDeleteAnalysisResponse withScimError(openapisdk.models.shared.ScimError scimError) {
        this.scimError = scimError;
        return this;
    }
}