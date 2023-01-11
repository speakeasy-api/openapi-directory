package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssociatedResourcesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application")
    public String application;
    public ListAssociatedResourcesPathParams withApplication(String application) {
        this.application = application;
        return this;
    }
}