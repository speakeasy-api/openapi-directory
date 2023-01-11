package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCodeSigningConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CodeSigningConfigArn")
    public String codeSigningConfigArn;
    public UpdateCodeSigningConfigPathParams withCodeSigningConfigArn(String codeSigningConfigArn) {
        this.codeSigningConfigArn = codeSigningConfigArn;
        return this;
    }
}