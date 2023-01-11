package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJobsByStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Status")
    public String status;
    public ListJobsByStatusPathParams withStatus(String status) {
        this.status = status;
        return this;
    }
}