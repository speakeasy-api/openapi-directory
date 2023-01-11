package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MovieCastSearchallReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=param")
    public String param;
    public MovieCastSearchallReadPathParams withParam(String param) {
        this.param = param;
        return this;
    }
}