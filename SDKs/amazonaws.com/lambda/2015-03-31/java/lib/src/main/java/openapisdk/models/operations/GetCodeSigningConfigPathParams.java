package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCodeSigningConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CodeSigningConfigArn")
    public String codeSigningConfigArn;
    public GetCodeSigningConfigPathParams withCodeSigningConfigArn(String codeSigningConfigArn) {
        this.codeSigningConfigArn = codeSigningConfigArn;
        return this;
    }
}