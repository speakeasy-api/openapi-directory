package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProfileObjectsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public ListProfileObjectsPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}