package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeEventCategoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeEventCategoriesActionEnum action;
    public GetDescribeEventCategoriesQueryParams withAction(GetDescribeEventCategoriesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceType")
    public String sourceType;
    public GetDescribeEventCategoriesQueryParams withSourceType(String sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeEventCategoriesVersionEnum version;
    public GetDescribeEventCategoriesQueryParams withVersion(GetDescribeEventCategoriesVersionEnum version) {
        this.version = version;
        return this;
    }
}