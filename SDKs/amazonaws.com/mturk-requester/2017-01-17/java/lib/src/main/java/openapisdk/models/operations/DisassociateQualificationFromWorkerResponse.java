package openapisdk.models.operations;



public class DisassociateQualificationFromWorkerResponse {
    public String contentType;
    public DisassociateQualificationFromWorkerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateQualificationFromWorkerResponse;
    public DisassociateQualificationFromWorkerResponse withDisassociateQualificationFromWorkerResponse(java.util.Map<String, Object> disassociateQualificationFromWorkerResponse) {
        this.disassociateQualificationFromWorkerResponse = disassociateQualificationFromWorkerResponse;
        return this;
    }
    public Object requestError;
    public DisassociateQualificationFromWorkerResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public DisassociateQualificationFromWorkerResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public DisassociateQualificationFromWorkerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}