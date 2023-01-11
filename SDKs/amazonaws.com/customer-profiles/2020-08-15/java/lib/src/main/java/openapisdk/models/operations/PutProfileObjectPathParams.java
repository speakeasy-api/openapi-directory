package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutProfileObjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public PutProfileObjectPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}