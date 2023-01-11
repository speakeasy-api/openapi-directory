package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssociatedAttributeGroupsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application")
    public String application;
    public ListAssociatedAttributeGroupsPathParams withApplication(String application) {
        this.application = application;
        return this;
    }
}