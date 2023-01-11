package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutScheduledUpdateGroupActionRequest {
    public PostPutScheduledUpdateGroupActionQueryParams queryParams;
    public PostPutScheduledUpdateGroupActionRequest withQueryParams(PostPutScheduledUpdateGroupActionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutScheduledUpdateGroupActionHeaders headers;
    public PostPutScheduledUpdateGroupActionRequest withHeaders(PostPutScheduledUpdateGroupActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutScheduledUpdateGroupActionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}