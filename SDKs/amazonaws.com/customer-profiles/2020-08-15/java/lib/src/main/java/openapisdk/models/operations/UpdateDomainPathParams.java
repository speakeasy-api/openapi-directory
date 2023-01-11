package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public UpdateDomainPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}