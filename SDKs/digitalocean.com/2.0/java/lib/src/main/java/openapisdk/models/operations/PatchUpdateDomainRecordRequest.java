package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUpdateDomainRecordRequest {
    public PatchUpdateDomainRecordPathParams pathParams;
    public PatchUpdateDomainRecordRequest withPathParams(PatchUpdateDomainRecordPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21domains1Percent7BdomainNamePercent7D1recordsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainRecordsItemsInput request;
    public PatchUpdateDomainRecordRequest withRequest(openapisdk.models.shared.Onev21domains1Percent7BdomainNamePercent7D1recordsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainRecordsItemsInput request) {
        this.request = request;
        return this;
    }
}