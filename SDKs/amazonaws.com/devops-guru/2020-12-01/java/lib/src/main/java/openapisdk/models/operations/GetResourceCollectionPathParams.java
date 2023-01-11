package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceCollectionType")
    public GetResourceCollectionResourceCollectionTypeEnum resourceCollectionType;
    public GetResourceCollectionPathParams withResourceCollectionType(GetResourceCollectionResourceCollectionTypeEnum resourceCollectionType) {
        this.resourceCollectionType = resourceCollectionType;
        return this;
    }
}