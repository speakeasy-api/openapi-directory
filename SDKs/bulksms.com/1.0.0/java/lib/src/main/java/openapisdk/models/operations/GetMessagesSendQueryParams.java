package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMessagesSendQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=body")
    public String body;
    public GetMessagesSendQueryParams withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deduplication-id")
    public Long deduplicationId;
    public GetMessagesSendQueryParams withDeduplicationId(Long deduplicationId) {
        this.deduplicationId = deduplicationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public String to;
    public GetMessagesSendQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
}