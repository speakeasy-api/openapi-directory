package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCodeSigningConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CodeSigningConfigArn")
    public String codeSigningConfigArn;
    public DeleteCodeSigningConfigPathParams withCodeSigningConfigArn(String codeSigningConfigArn) {
        this.codeSigningConfigArn = codeSigningConfigArn;
        return this;
    }
}