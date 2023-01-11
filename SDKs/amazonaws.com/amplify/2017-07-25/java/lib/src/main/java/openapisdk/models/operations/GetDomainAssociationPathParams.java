package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainAssociationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public GetDomainAssociationPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainName")
    public String domainName;
    public GetDomainAssociationPathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}