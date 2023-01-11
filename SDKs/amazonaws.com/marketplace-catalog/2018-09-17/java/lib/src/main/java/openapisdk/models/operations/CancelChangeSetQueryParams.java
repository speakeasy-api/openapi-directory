package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelChangeSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=catalog")
    public String catalog;
    public CancelChangeSetQueryParams withCatalog(String catalog) {
        this.catalog = catalog;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changeSetId")
    public String changeSetId;
    public CancelChangeSetQueryParams withChangeSetId(String changeSetId) {
        this.changeSetId = changeSetId;
        return this;
    }
}