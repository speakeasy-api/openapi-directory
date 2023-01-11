package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HeadKeyPkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PK")
    public String pk;
    public HeadKeyPkPathParams withPk(String pk) {
        this.pk = pk;
        return this;
    }
}