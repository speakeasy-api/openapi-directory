package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEntityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=catalog")
    public String catalog;
    public DescribeEntityQueryParams withCatalog(String catalog) {
        this.catalog = catalog;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entityId")
    public String entityId;
    public DescribeEntityQueryParams withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
}