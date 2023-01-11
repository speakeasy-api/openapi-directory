package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAddonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=addonName")
    public String addonName;
    public DeleteAddonPathParams withAddonName(String addonName) {
        this.addonName = addonName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DeleteAddonPathParams withName(String name) {
        this.name = name;
        return this;
    }
}