package openapisdk.models.operations;



public class ListBonusPaymentsResponse {
    public String contentType;
    public ListBonusPaymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBonusPaymentsResponse listBonusPaymentsResponse;
    public ListBonusPaymentsResponse withListBonusPaymentsResponse(openapisdk.models.shared.ListBonusPaymentsResponse listBonusPaymentsResponse) {
        this.listBonusPaymentsResponse = listBonusPaymentsResponse;
        return this;
    }
    public Object requestError;
    public ListBonusPaymentsResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public ListBonusPaymentsResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public ListBonusPaymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}