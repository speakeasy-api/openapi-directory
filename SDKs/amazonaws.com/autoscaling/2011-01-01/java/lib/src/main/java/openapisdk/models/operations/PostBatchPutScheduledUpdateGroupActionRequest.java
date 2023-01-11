package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchPutScheduledUpdateGroupActionRequest {
    public PostBatchPutScheduledUpdateGroupActionQueryParams queryParams;
    public PostBatchPutScheduledUpdateGroupActionRequest withQueryParams(PostBatchPutScheduledUpdateGroupActionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostBatchPutScheduledUpdateGroupActionHeaders headers;
    public PostBatchPutScheduledUpdateGroupActionRequest withHeaders(PostBatchPutScheduledUpdateGroupActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostBatchPutScheduledUpdateGroupActionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}