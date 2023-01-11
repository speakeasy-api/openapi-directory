package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public DeleteProfilePathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}