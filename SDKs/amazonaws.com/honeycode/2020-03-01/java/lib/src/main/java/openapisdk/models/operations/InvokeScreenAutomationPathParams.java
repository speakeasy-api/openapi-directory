package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvokeScreenAutomationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public InvokeScreenAutomationPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=automationId")
    public String automationId;
    public InvokeScreenAutomationPathParams withAutomationId(String automationId) {
        this.automationId = automationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=screenId")
    public String screenId;
    public InvokeScreenAutomationPathParams withScreenId(String screenId) {
        this.screenId = screenId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workbookId")
    public String workbookId;
    public InvokeScreenAutomationPathParams withWorkbookId(String workbookId) {
        this.workbookId = workbookId;
        return this;
    }
}