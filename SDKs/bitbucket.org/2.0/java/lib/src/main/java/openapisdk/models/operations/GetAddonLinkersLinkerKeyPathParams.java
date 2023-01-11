package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddonLinkersLinkerKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=linker_key")
    public String linkerKey;
    public GetAddonLinkersLinkerKeyPathParams withLinkerKey(String linkerKey) {
        this.linkerKey = linkerKey;
        return this;
    }
}