package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddProfileKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public AddProfileKeyPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}