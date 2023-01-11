package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProfileKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public DeleteProfileKeyPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}