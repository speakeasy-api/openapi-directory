package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCanaryRunsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GetCanaryRunsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}