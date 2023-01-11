package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public UpdateProfilePathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}