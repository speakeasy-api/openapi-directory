package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProfileObjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public DeleteProfileObjectPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}