package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessSetEnabledPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enabledOrNot")
    public String enabledOrNot;
    public AccessSetEnabledPathParams withEnabledOrNot(String enabledOrNot) {
        this.enabledOrNot = enabledOrNot;
        return this;
    }
}