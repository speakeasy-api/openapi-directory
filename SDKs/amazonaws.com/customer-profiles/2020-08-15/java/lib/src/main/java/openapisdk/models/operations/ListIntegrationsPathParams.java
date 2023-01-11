package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIntegrationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public ListIntegrationsPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}