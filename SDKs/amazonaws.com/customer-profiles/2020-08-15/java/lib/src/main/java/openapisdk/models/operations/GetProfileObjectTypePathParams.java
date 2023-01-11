package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProfileObjectTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public GetProfileObjectTypePathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ObjectTypeName")
    public String objectTypeName;
    public GetProfileObjectTypePathParams withObjectTypeName(String objectTypeName) {
        this.objectTypeName = objectTypeName;
        return this;
    }
}