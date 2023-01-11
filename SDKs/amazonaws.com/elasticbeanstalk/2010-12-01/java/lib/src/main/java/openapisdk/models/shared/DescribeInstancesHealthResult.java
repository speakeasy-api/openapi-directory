package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DescribeInstancesHealthResult
 * Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk environment.
**/
public class DescribeInstancesHealthResult {
    public SingleInstanceHealth[] instanceHealthList;
    public DescribeInstancesHealthResult withInstanceHealthList(SingleInstanceHealth[] instanceHealthList) {
        this.instanceHealthList = instanceHealthList;
        return this;
    }
    public String nextToken;
    public DescribeInstancesHealthResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public OffsetDateTime refreshedAt;
    public DescribeInstancesHealthResult withRefreshedAt(OffsetDateTime refreshedAt) {
        this.refreshedAt = refreshedAt;
        return this;
    }
}