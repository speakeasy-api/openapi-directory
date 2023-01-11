package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeComponentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=arn")
    public String arn;
    public DescribeComponentPathParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
}