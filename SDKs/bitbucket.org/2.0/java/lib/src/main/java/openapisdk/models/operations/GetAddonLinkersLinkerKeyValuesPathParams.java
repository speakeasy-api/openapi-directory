package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddonLinkersLinkerKeyValuesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=linker_key")
    public String linkerKey;
    public GetAddonLinkersLinkerKeyValuesPathParams withLinkerKey(String linkerKey) {
        this.linkerKey = linkerKey;
        return this;
    }
}