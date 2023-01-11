package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutJobFailureResultRequest {
    public PutJobFailureResultHeaders headers;
    public PutJobFailureResultRequest withHeaders(PutJobFailureResultHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutJobFailureResultInput request;
    public PutJobFailureResultRequest withRequest(openapisdk.models.shared.PutJobFailureResultInput request) {
        this.request = request;
        return this;
    }
}