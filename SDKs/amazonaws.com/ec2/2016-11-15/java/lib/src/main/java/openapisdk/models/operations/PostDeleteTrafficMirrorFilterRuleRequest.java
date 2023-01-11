package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTrafficMirrorFilterRuleRequest {
    public PostDeleteTrafficMirrorFilterRuleQueryParams queryParams;
    public PostDeleteTrafficMirrorFilterRuleRequest withQueryParams(PostDeleteTrafficMirrorFilterRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTrafficMirrorFilterRuleHeaders headers;
    public PostDeleteTrafficMirrorFilterRuleRequest withHeaders(PostDeleteTrafficMirrorFilterRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTrafficMirrorFilterRuleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}