package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain_name")
    public String domainName;
    public DeleteDomainPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}