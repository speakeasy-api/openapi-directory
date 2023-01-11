package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTrafficMirrorFilterRuleRequest {
    public PostCreateTrafficMirrorFilterRuleQueryParams queryParams;
    public PostCreateTrafficMirrorFilterRuleRequest withQueryParams(PostCreateTrafficMirrorFilterRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTrafficMirrorFilterRuleHeaders headers;
    public PostCreateTrafficMirrorFilterRuleRequest withHeaders(PostCreateTrafficMirrorFilterRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTrafficMirrorFilterRuleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}