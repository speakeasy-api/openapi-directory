package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntegrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public GetIntegrationPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}