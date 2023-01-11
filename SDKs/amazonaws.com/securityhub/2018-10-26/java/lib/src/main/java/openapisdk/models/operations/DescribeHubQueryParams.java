package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeHubQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HubArn")
    public String hubArn;
    public DescribeHubQueryParams withHubArn(String hubArn) {
        this.hubArn = hubArn;
        return this;
    }
}