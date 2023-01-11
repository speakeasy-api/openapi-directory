package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReportInstanceStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostReportInstanceStatusActionEnum action;
    public PostReportInstanceStatusQueryParams withAction(PostReportInstanceStatusActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostReportInstanceStatusVersionEnum version;
    public PostReportInstanceStatusQueryParams withVersion(PostReportInstanceStatusVersionEnum version) {
        this.version = version;
        return this;
    }
}