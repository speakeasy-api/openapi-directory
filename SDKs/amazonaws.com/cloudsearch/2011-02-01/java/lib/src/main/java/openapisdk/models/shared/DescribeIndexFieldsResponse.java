package openapisdk.models.shared;



/**
 * DescribeIndexFieldsResponse
 * A response message that contains the index fields for a search domain.
**/
public class DescribeIndexFieldsResponse {
    public IndexFieldStatus[] indexFields;
    public DescribeIndexFieldsResponse withIndexFields(IndexFieldStatus[] indexFields) {
        this.indexFields = indexFields;
        return this;
    }
}