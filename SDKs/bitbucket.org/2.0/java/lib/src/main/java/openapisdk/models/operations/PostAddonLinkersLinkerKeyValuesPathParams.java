package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddonLinkersLinkerKeyValuesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=linker_key")
    public String linkerKey;
    public PostAddonLinkersLinkerKeyValuesPathParams withLinkerKey(String linkerKey) {
        this.linkerKey = linkerKey;
        return this;
    }
}