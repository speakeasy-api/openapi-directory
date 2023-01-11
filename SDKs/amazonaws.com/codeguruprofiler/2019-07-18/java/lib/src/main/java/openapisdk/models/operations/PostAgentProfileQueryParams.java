package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAgentProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=profileToken")
    public String profileToken;
    public PostAgentProfileQueryParams withProfileToken(String profileToken) {
        this.profileToken = profileToken;
        return this;
    }
}