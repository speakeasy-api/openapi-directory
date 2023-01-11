package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public CreateDomainPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}