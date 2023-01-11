package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProfileObjectTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainName")
    public String domainName;
    public DeleteProfileObjectTypePathParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ObjectTypeName")
    public String objectTypeName;
    public DeleteProfileObjectTypePathParams withObjectTypeName(String objectTypeName) {
        this.objectTypeName = objectTypeName;
        return this;
    }
}