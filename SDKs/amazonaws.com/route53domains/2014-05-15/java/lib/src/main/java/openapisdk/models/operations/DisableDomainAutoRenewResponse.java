package openapisdk.models.operations;



public class DisableDomainAutoRenewResponse {
    public String contentType;
    public DisableDomainAutoRenewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disableDomainAutoRenewResponse;
    public DisableDomainAutoRenewResponse withDisableDomainAutoRenewResponse(java.util.Map<String, Object> disableDomainAutoRenewResponse) {
        this.disableDomainAutoRenewResponse = disableDomainAutoRenewResponse;
        return this;
    }
    public Object invalidInput;
    public DisableDomainAutoRenewResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Long statusCode;
    public DisableDomainAutoRenewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedTLD;
    public DisableDomainAutoRenewResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}