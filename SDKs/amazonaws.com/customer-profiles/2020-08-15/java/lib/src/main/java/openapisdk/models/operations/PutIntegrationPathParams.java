package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutIntegrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public PutIntegrationPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}