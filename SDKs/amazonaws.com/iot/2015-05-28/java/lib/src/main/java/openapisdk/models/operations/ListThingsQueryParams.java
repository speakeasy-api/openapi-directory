package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListThingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=attributeName")
    public String attributeName;
    public ListThingsQueryParams withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=attributeValue")
    public String attributeValue;
    public ListThingsQueryParams withAttributeValue(String attributeValue) {
        this.attributeValue = attributeValue;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListThingsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListThingsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=thingTypeName")
    public String thingTypeName;
    public ListThingsQueryParams withThingTypeName(String thingTypeName) {
        this.thingTypeName = thingTypeName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=usePrefixAttributeValue")
    public Boolean usePrefixAttributeValue;
    public ListThingsQueryParams withUsePrefixAttributeValue(Boolean usePrefixAttributeValue) {
        this.usePrefixAttributeValue = usePrefixAttributeValue;
        return this;
    }
}