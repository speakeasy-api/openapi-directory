package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiMappingId")
    public String apiMappingId;
    public GetApiMappingPathParams withApiMappingId(String apiMappingId) {
        this.apiMappingId = apiMappingId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainName")
    public String domainName;
    public GetApiMappingPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}