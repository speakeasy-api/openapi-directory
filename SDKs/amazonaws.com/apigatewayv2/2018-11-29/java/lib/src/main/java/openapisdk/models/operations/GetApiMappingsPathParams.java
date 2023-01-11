package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiMappingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainName")
    public String domainName;
    public GetApiMappingsPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}