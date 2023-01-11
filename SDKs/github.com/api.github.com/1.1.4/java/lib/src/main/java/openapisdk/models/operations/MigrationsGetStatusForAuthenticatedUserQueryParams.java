package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsGetStatusForAuthenticatedUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude")
    public String[] exclude;
    public MigrationsGetStatusForAuthenticatedUserQueryParams withExclude(String[] exclude) {
        this.exclude = exclude;
        return this;
    }
}