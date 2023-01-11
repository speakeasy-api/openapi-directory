package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStreamQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExclusiveStartShardId")
    public String exclusiveStartShardId;
    public DescribeStreamQueryParams withExclusiveStartShardId(String exclusiveStartShardId) {
        this.exclusiveStartShardId = exclusiveStartShardId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public DescribeStreamQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
}