package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutProfileObjectTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public PutProfileObjectTypePathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ObjectTypeName")
    public String objectTypeName;
    public PutProfileObjectTypePathParams withObjectTypeName(String objectTypeName) {
        this.objectTypeName = objectTypeName;
        return this;
    }
}