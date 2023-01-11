package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddonLinkersLinkerKeyValuesValueIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=linker_key")
    public String linkerKey;
    public GetAddonLinkersLinkerKeyValuesValueIdPathParams withLinkerKey(String linkerKey) {
        this.linkerKey = linkerKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=value_id")
    public Long valueId;
    public GetAddonLinkersLinkerKeyValuesValueIdPathParams withValueId(Long valueId) {
        this.valueId = valueId;
        return this;
    }
}