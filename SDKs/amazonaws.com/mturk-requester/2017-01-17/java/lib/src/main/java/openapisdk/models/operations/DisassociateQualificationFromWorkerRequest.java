package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateQualificationFromWorkerRequest {
    public DisassociateQualificationFromWorkerHeaders headers;
    public DisassociateQualificationFromWorkerRequest withHeaders(DisassociateQualificationFromWorkerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateQualificationFromWorkerRequest request;
    public DisassociateQualificationFromWorkerRequest withRequest(openapisdk.models.shared.DisassociateQualificationFromWorkerRequest request) {
        this.request = request;
        return this;
    }
}