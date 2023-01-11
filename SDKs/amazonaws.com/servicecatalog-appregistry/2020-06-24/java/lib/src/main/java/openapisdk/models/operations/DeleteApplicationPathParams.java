package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application")
    public String application;
    public DeleteApplicationPathParams withApplication(String application) {
        this.application = application;
        return this;
    }
}