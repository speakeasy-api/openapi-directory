package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsListForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GistsListForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}