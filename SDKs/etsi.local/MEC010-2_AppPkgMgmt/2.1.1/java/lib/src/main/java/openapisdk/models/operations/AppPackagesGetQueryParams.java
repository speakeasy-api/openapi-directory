package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppPackagesGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all_fields")
    public String allFields;
    public AppPackagesGetQueryParams withAllFields(String allFields) {
        this.allFields = allFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_default")
    public String excludeDefault;
    public AppPackagesGetQueryParams withExcludeDefault(String excludeDefault) {
        this.excludeDefault = excludeDefault;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_fields")
    public String excludeFields;
    public AppPackagesGetQueryParams withExcludeFields(String excludeFields) {
        this.excludeFields = excludeFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public AppPackagesGetQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public AppPackagesGetQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}