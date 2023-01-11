package openapisdk.models.operations;



public class WkhtmltopdfFromUrlGetResponse {
    public openapisdk.models.shared.ApiResponseFailure apiResponseFailure;
    public WkhtmltopdfFromUrlGetResponse withApiResponseFailure(openapisdk.models.shared.ApiResponseFailure apiResponseFailure) {
        this.apiResponseFailure = apiResponseFailure;
        return this;
    }
    public openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess;
    public WkhtmltopdfFromUrlGetResponse withApiResponseSuccess(openapisdk.models.shared.ApiResponseSuccess apiResponseSuccess) {
        this.apiResponseSuccess = apiResponseSuccess;
        return this;
    }
    public String contentType;
    public WkhtmltopdfFromUrlGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WkhtmltopdfFromUrlGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] wkhtmltopdfFromUrlGET200ApplicationPdfBinaryString;
    public WkhtmltopdfFromUrlGetResponse withWkhtmltopdfFromUrlGet200ApplicationPdfBinaryString(byte[] wkhtmltopdfFromUrlGET200ApplicationPdfBinaryString) {
        this.wkhtmltopdfFromUrlGET200ApplicationPdfBinaryString = wkhtmltopdfFromUrlGET200ApplicationPdfBinaryString;
        return this;
    }
}