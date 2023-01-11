package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AvatarsGetFlagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=code")
    public String code;
    public AvatarsGetFlagPathParams withCode(String code) {
        this.code = code;
        return this;
    }
}