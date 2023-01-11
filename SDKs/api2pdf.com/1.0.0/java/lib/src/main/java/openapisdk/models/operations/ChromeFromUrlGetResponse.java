package openapisdk.models.operations;



public class ChromeFromUrlGetResponse {
    public openapisdk.models.shared.ApiResponseFailure apiResponseFailure;
    public ChromeFromUrlGetResponse withApiResponseFailure(openapisdk.models.shared.ApiResponseFailure apiResponseFailure) {
        this.apiResponseFailure = apiResponseFailure;
        return this;
    }
    public openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess;
    public ChromeFromUrlGetResponse withApiResponseSuccess(openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess) {
        this.apiResponseSuccess = apiResponseSuccess;
        return this;
    }
    public String contentType;
    public ChromeFromUrlGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChromeFromUrlGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] chromeFromUrlGET200ApplicationPdfBinaryString;
    public ChromeFromUrlGetResponse withChromeFromUrlGet200ApplicationPdfBinaryString(byte[] chromeFromUrlGET200ApplicationPdfBinaryString) {
        this.chromeFromUrlGET200ApplicationPdfBinaryString = chromeFromUrlGET200ApplicationPdfBinaryString;
        return this;
    }
}