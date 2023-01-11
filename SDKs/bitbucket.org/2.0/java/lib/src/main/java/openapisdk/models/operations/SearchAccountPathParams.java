package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public SearchAccountPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}