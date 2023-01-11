package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAlarmModelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public String version;
    public DescribeAlarmModelQueryParams withVersion(String version) {
        this.version = version;
        return this;
    }
}