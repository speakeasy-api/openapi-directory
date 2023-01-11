package openapisdk.models.operations;



public class ResendFailedIpnResponse {
    public String contentType;
    public ResendFailedIpnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ResendFailedIpnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ResendFailedIpn resendFailedIPN;
    public ResendFailedIpnResponse withResendFailedIpn(openapisdk.models.shared.ResendFailedIpn resendFailedIPN) {
        this.resendFailedIPN = resendFailedIPN;
        return this;
    }
}