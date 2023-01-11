package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AvatarsGetBrowserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=code")
    public String code;
    public AvatarsGetBrowserPathParams withCode(String code) {
        this.code = code;
        return this;
    }
}