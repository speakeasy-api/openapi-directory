package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CodesOfConductGetConductCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public CodesOfConductGetConductCodePathParams withKey(String key) {
        this.key = key;
        return this;
    }
}