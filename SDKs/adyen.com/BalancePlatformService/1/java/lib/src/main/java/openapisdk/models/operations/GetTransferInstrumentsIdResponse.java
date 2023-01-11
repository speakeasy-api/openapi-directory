package openapisdk.models.operations;



public class GetTransferInstrumentsIdResponse {
    public String contentType;
    public GetTransferInstrumentsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serviceError;
    public GetTransferInstrumentsIdResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public GetTransferInstrumentsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transferInstrument;
    public GetTransferInstrumentsIdResponse withTransferInstrument(Object transferInstrument) {
        this.transferInstrument = transferInstrument;
        return this;
    }
}