package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MgetInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=infoArray")
    public String[] infoArray;
    public MgetInfoPathParams withInfoArray(String[] infoArray) {
        this.infoArray = infoArray;
        return this;
    }
}