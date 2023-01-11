package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportApiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public ExportApiPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=specification")
    public String specification;
    public ExportApiPathParams withSpecification(String specification) {
        this.specification = specification;
        return this;
    }
}