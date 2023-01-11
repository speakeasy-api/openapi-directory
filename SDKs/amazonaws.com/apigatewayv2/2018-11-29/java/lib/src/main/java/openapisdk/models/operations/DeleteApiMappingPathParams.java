package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApiMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiMappingId")
    public String apiMappingId;
    public DeleteApiMappingPathParams withApiMappingId(String apiMappingId) {
        this.apiMappingId = apiMappingId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainName")
    public String domainName;
    public DeleteApiMappingPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}