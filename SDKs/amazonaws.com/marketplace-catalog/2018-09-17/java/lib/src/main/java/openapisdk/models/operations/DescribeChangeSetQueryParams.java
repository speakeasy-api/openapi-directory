package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeChangeSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=catalog")
    public String catalog;
    public DescribeChangeSetQueryParams withCatalog(String catalog) {
        this.catalog = catalog;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changeSetId")
    public String changeSetId;
    public DescribeChangeSetQueryParams withChangeSetId(String changeSetId) {
        this.changeSetId = changeSetId;
        return this;
    }
}