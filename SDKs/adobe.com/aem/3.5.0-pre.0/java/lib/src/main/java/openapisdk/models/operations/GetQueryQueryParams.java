package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=1_property")
    public String oneProperty;
    public GetQueryQueryParams withOneProperty(String oneProperty) {
        this.oneProperty = oneProperty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=1_property.value")
    public String onePropertyValue;
    public GetQueryQueryParams withOnePropertyValue(String onePropertyValue) {
        this.onePropertyValue = onePropertyValue;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=p.limit")
    public Double pLimit;
    public GetQueryQueryParams withPLimit(Double pLimit) {
        this.pLimit = pLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=path")
    public String path;
    public GetQueryQueryParams withPath(String path) {
        this.path = path;
        return this;
    }
}