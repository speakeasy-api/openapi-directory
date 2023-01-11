package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AvatarsGetCreditCardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=code")
    public String code;
    public AvatarsGetCreditCardPathParams withCode(String code) {
        this.code = code;
        return this;
    }
}