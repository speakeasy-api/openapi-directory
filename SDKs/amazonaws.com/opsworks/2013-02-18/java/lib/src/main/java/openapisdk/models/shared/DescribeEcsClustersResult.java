package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeEcsClustersResult
 * Contains the response to a <code>DescribeEcsClusters</code> request.
**/
public class DescribeEcsClustersResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EcsClusters")
    public EcsCluster[] ecsClusters;
    public DescribeEcsClustersResult withEcsClusters(EcsCluster[] ecsClusters) {
        this.ecsClusters = ecsClusters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeEcsClustersResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}