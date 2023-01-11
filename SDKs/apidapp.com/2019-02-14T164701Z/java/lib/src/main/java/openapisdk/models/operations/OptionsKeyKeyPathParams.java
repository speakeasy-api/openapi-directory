package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptionsKeyKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public OptionsKeyKeyPathParams withKey(String key) {
        this.key = key;
        return this;
    }
}