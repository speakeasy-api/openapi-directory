package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTrafficMirrorFilterRuleRequest {
    public PostModifyTrafficMirrorFilterRuleQueryParams queryParams;
    public PostModifyTrafficMirrorFilterRuleRequest withQueryParams(PostModifyTrafficMirrorFilterRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyTrafficMirrorFilterRuleHeaders headers;
    public PostModifyTrafficMirrorFilterRuleRequest withHeaders(PostModifyTrafficMirrorFilterRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyTrafficMirrorFilterRuleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}