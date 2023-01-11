package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductSearchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=subjectId")
    public String subjectId;
    public ProductSearchPathParams withSubjectId(String subjectId) {
        this.subjectId = subjectId;
        return this;
    }
}