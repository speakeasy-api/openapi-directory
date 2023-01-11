package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsGetStatusForOrgQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude")
    public openapisdk.models.shared.MigrationIdEnum[] exclude;
    public MigrationsGetStatusForOrgQueryParams withExclude(openapisdk.models.shared.MigrationIdEnum[] exclude) {
        this.exclude = exclude;
        return this;
    }
}