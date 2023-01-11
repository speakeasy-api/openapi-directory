package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergeProfilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public MergeProfilesPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}