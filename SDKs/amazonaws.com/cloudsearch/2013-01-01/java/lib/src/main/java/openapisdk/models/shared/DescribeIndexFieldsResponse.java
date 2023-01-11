package openapisdk.models.shared;



/**
 * DescribeIndexFieldsResponse
 * The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.
**/
public class DescribeIndexFieldsResponse {
    public IndexFieldStatus[] indexFields;
    public DescribeIndexFieldsResponse withIndexFields(IndexFieldStatus[] indexFields) {
        this.indexFields = indexFields;
        return this;
    }
}