package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteIntegrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public DeleteIntegrationPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}