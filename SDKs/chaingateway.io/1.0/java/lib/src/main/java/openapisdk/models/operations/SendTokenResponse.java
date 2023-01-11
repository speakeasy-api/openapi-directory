package openapisdk.models.operations;



public class SendTokenResponse {
    public String contentType;
    public SendTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SendTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SendToken sendToken;
    public SendTokenResponse withSendToken(openapisdk.models.shared.SendToken sendToken) {
        this.sendToken = sendToken;
        return this;
    }
}