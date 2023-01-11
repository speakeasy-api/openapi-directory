package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetFlowLogsIntegrationTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetFlowLogsIntegrationTemplateActionEnum action;
    public PostGetFlowLogsIntegrationTemplateQueryParams withAction(PostGetFlowLogsIntegrationTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetFlowLogsIntegrationTemplateVersionEnum version;
    public PostGetFlowLogsIntegrationTemplateQueryParams withVersion(PostGetFlowLogsIntegrationTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}