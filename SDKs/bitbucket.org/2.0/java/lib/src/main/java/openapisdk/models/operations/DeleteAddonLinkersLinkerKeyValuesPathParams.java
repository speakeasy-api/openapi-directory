package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAddonLinkersLinkerKeyValuesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=linker_key")
    public String linkerKey;
    public DeleteAddonLinkersLinkerKeyValuesPathParams withLinkerKey(String linkerKey) {
        this.linkerKey = linkerKey;
        return this;
    }
}