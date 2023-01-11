package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAddonLinkersLinkerKeyValuesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=linker_key")
    public String linkerKey;
    public PutAddonLinkersLinkerKeyValuesPathParams withLinkerKey(String linkerKey) {
        this.linkerKey = linkerKey;
        return this;
    }
}