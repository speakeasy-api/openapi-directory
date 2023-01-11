package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KeyBindPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PK")
    public String pk;
    public KeyBindPathParams withPk(String pk) {
        this.pk = pk;
        return this;
    }
}