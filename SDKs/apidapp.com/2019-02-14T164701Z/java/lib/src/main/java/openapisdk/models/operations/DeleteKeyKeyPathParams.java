package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteKeyKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public DeleteKeyKeyPathParams withKey(String key) {
        this.key = key;
        return this;
    }
}