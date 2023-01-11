package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApiMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiMappingId")
    public String apiMappingId;
    public UpdateApiMappingPathParams withApiMappingId(String apiMappingId) {
        this.apiMappingId = apiMappingId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainName")
    public String domainName;
    public UpdateApiMappingPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}