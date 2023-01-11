package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAnalyzerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientToken")
    public String clientToken;
    public DeleteAnalyzerQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}