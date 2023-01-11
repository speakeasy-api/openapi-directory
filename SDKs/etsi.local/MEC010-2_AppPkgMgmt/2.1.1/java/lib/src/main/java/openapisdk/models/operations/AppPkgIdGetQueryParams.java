package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppPkgIdGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all_fields")
    public String allFields;
    public AppPkgIdGetQueryParams withAllFields(String allFields) {
        this.allFields = allFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_default")
    public String excludeDefault;
    public AppPkgIdGetQueryParams withExcludeDefault(String excludeDefault) {
        this.excludeDefault = excludeDefault;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_fields")
    public String excludeFields;
    public AppPkgIdGetQueryParams withExcludeFields(String excludeFields) {
        this.excludeFields = excludeFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public AppPkgIdGetQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public AppPkgIdGetQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}