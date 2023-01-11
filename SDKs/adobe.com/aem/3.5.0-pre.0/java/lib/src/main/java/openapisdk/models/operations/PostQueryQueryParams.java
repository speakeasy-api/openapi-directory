package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQueryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=1_property")
    public String oneProperty;
    public PostQueryQueryParams withOneProperty(String oneProperty) {
        this.oneProperty = oneProperty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=1_property.value")
    public String onePropertyValue;
    public PostQueryQueryParams withOnePropertyValue(String onePropertyValue) {
        this.onePropertyValue = onePropertyValue;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=p.limit")
    public Double pLimit;
    public PostQueryQueryParams withPLimit(Double pLimit) {
        this.pLimit = pLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=path")
    public String path;
    public PostQueryQueryParams withPath(String path) {
        this.path = path;
        return this;
    }
}