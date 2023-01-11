package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEulaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eulaId")
    public String eulaId;
    public GetEulaPathParams withEulaId(String eulaId) {
        this.eulaId = eulaId;
        return this;
    }
}