package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuiteDefinitionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=suiteDefinitionVersion")
    public String suiteDefinitionVersion;
    public GetSuiteDefinitionQueryParams withSuiteDefinitionVersion(String suiteDefinitionVersion) {
        this.suiteDefinitionVersion = suiteDefinitionVersion;
        return this;
    }
}