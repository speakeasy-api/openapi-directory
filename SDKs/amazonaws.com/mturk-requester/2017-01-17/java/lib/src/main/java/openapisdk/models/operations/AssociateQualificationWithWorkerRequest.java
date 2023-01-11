package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateQualificationWithWorkerRequest {
    public AssociateQualificationWithWorkerHeaders headers;
    public AssociateQualificationWithWorkerRequest withHeaders(AssociateQualificationWithWorkerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateQualificationWithWorkerRequest request;
    public AssociateQualificationWithWorkerRequest withRequest(openapisdk.models.shared.AssociateQualificationWithWorkerRequest request) {
        this.request = request;
        return this;
    }
}