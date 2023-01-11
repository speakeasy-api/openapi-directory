package openapisdk.models.operations;



public class ViewBillingResponse {
    public String contentType;
    public ViewBillingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInput;
    public ViewBillingResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Long statusCode;
    public ViewBillingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ViewBillingResponse viewBillingResponse;
    public ViewBillingResponse withViewBillingResponse(openapisdk.models.shared.ViewBillingResponse viewBillingResponse) {
        this.viewBillingResponse = viewBillingResponse;
        return this;
    }
}