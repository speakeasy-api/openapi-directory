package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ShowtimeSearchallReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=param")
    public String param;
    public ShowtimeSearchallReadPathParams withParam(String param) {
        this.param = param;
        return this;
    }
}