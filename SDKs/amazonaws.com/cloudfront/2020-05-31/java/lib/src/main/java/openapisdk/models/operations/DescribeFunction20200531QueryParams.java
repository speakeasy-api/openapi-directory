package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFunction20200531QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Stage")
    public DescribeFunction20200531StageEnum stage;
    public DescribeFunction20200531QueryParams withStage(DescribeFunction20200531StageEnum stage) {
        this.stage = stage;
        return this;
    }
}