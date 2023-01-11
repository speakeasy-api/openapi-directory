package openapisdk.models.shared;



public class DescribeIamInstanceProfileAssociationsResult {
    public java.util.Map<String, Object> iamInstanceProfileAssociations;
    public DescribeIamInstanceProfileAssociationsResult withIamInstanceProfileAssociations(java.util.Map<String, Object> iamInstanceProfileAssociations) {
        this.iamInstanceProfileAssociations = iamInstanceProfileAssociations;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public DescribeIamInstanceProfileAssociationsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}