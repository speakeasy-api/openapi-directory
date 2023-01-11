package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KeyUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PK")
    public String pk;
    public KeyUpdatePathParams withPk(String pk) {
        this.pk = pk;
        return this;
    }
}