package openapisdk.models.operations;



public class DeletePushDeviceDetailsResponse {
    public byte[] body;
    public DeletePushDeviceDetailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeletePushDeviceDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeletePushDeviceDetailsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DeletePushDeviceDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}