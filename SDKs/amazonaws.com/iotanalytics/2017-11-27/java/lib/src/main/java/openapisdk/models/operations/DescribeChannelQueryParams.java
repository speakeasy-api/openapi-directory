package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeChannelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeStatistics")
    public Boolean includeStatistics;
    public DescribeChannelQueryParams withIncludeStatistics(Boolean includeStatistics) {
        this.includeStatistics = includeStatistics;
        return this;
    }
}