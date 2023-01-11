package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeResourceCollectionHealthPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ResourceCollectionType")
    public DescribeResourceCollectionHealthResourceCollectionTypeEnum resourceCollectionType;
    public DescribeResourceCollectionHealthPathParams withResourceCollectionType(DescribeResourceCollectionHealthResourceCollectionTypeEnum resourceCollectionType) {
        this.resourceCollectionType = resourceCollectionType;
        return this;
    }
}