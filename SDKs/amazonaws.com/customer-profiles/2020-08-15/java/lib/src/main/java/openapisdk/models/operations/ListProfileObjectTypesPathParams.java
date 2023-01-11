package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProfileObjectTypesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public ListProfileObjectTypesPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}