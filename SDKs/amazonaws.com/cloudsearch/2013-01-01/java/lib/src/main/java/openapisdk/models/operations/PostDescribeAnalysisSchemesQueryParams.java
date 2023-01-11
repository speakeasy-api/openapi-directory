package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAnalysisSchemesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAnalysisSchemesActionEnum action;
    public PostDescribeAnalysisSchemesQueryParams withAction(PostDescribeAnalysisSchemesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAnalysisSchemesVersionEnum version;
    public PostDescribeAnalysisSchemesQueryParams withVersion(PostDescribeAnalysisSchemesVersionEnum version) {
        this.version = version;
        return this;
    }
}