package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeJobExecutionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=executionNumber")
    public Long executionNumber;
    public DescribeJobExecutionQueryParams withExecutionNumber(Long executionNumber) {
        this.executionNumber = executionNumber;
        return this;
    }
}