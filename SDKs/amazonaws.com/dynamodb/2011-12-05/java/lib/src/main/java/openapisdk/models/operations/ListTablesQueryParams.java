package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTablesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExclusiveStartTableName")
    public String exclusiveStartTableName;
    public ListTablesQueryParams withExclusiveStartTableName(String exclusiveStartTableName) {
        this.exclusiveStartTableName = exclusiveStartTableName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public ListTablesQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
}