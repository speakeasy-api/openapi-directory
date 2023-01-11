package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDatastoreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeStatistics")
    public Boolean includeStatistics;
    public DescribeDatastoreQueryParams withIncludeStatistics(Boolean includeStatistics) {
        this.includeStatistics = includeStatistics;
        return this;
    }
}