package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomainRecordRequest {
    public CreateDomainRecordPathParams pathParams;
    public CreateDomainRecordRequest withPathParams(CreateDomainRecordPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateDomainRecordRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}