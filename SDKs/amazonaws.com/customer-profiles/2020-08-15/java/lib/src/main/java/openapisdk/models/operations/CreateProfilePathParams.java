package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public CreateProfilePathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}