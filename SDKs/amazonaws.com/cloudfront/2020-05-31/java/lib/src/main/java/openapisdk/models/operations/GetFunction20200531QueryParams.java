package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFunction20200531QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Stage")
    public GetFunction20200531StageEnum stage;
    public GetFunction20200531QueryParams withStage(GetFunction20200531StageEnum stage) {
        this.stage = stage;
        return this;
    }
}