package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateAlias20200531QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Alias")
    public String alias;
    public AssociateAlias20200531QueryParams withAlias(String alias) {
        this.alias = alias;
        return this;
    }
}