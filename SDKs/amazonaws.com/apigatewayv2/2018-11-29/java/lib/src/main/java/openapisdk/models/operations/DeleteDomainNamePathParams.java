package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDomainNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainName")
    public String domainName;
    public DeleteDomainNamePathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}