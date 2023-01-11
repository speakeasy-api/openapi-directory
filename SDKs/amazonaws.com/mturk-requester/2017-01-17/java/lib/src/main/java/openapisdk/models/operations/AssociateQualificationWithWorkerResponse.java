package openapisdk.models.operations;



public class AssociateQualificationWithWorkerResponse {
    public java.util.Map<String, Object> associateQualificationWithWorkerResponse;
    public AssociateQualificationWithWorkerResponse withAssociateQualificationWithWorkerResponse(java.util.Map<String, Object> associateQualificationWithWorkerResponse) {
        this.associateQualificationWithWorkerResponse = associateQualificationWithWorkerResponse;
        return this;
    }
    public String contentType;
    public AssociateQualificationWithWorkerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object requestError;
    public AssociateQualificationWithWorkerResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public AssociateQualificationWithWorkerResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public AssociateQualificationWithWorkerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}