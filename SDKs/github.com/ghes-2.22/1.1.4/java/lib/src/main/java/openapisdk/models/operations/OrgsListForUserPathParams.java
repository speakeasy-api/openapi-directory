package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsListForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public OrgsListForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}