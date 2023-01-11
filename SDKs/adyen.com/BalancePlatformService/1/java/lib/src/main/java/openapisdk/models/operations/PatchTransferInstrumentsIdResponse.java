package openapisdk.models.operations;



public class PatchTransferInstrumentsIdResponse {
    public String contentType;
    public PatchTransferInstrumentsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serviceError;
    public PatchTransferInstrumentsIdResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PatchTransferInstrumentsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transferInstrument;
    public PatchTransferInstrumentsIdResponse withTransferInstrument(Object transferInstrument) {
        this.transferInstrument = transferInstrument;
        return this;
    }
}