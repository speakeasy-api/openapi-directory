package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KeyRetrievePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PK")
    public String pk;
    public KeyRetrievePathParams withPk(String pk) {
        this.pk = pk;
        return this;
    }
}