package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutJobSuccessResultRequest {
    public PutJobSuccessResultHeaders headers;
    public PutJobSuccessResultRequest withHeaders(PutJobSuccessResultHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutJobSuccessResultInput request;
    public PutJobSuccessResultRequest withRequest(openapisdk.models.shared.PutJobSuccessResultInput request) {
        this.request = request;
        return this;
    }
}