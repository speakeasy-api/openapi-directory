package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFunctionsByCodeSigningConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CodeSigningConfigArn")
    public String codeSigningConfigArn;
    public ListFunctionsByCodeSigningConfigPathParams withCodeSigningConfigArn(String codeSigningConfigArn) {
        this.codeSigningConfigArn = codeSigningConfigArn;
        return this;
    }
}