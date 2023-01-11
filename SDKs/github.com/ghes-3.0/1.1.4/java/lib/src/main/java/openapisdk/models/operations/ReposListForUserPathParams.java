package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public ReposListForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}