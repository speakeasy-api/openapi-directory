package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntrospectionSchemaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetIntrospectionSchemaFormatEnum format;
    public GetIntrospectionSchemaQueryParams withFormat(GetIntrospectionSchemaFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeDirectives")
    public Boolean includeDirectives;
    public GetIntrospectionSchemaQueryParams withIncludeDirectives(Boolean includeDirectives) {
        this.includeDirectives = includeDirectives;
        return this;
    }
}