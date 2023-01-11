package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainName")
    public String domainName;
    public CreateApiMappingPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}