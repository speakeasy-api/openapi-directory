package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAlmawsV1TaskListsPrintoutsPrintoutIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=op")
    public String op;
    public PostAlmawsV1TaskListsPrintoutsPrintoutIdQueryParams withOp(String op) {
        this.op = op;
        return this;
    }
}