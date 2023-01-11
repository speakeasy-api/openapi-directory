package openapisdk.models.operations;



public class PostTransferInstrumentsResponse {
    public String contentType;
    public PostTransferInstrumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serviceError;
    public PostTransferInstrumentsResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostTransferInstrumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transferInstrument;
    public PostTransferInstrumentsResponse withTransferInstrument(Object transferInstrument) {
        this.transferInstrument = transferInstrument;
        return this;
    }
}