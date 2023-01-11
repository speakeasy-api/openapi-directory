package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabOrdersSummaryReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LabOrdersSummaryReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}