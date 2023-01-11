package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabResultsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LabResultsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}