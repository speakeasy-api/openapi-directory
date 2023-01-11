package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DescribeEnvironmentHealthResult
 * Health details for an AWS Elastic Beanstalk environment.
**/
public class DescribeEnvironmentHealthResult {
    public ApplicationMetrics applicationMetrics;
    public DescribeEnvironmentHealthResult withApplicationMetrics(ApplicationMetrics applicationMetrics) {
        this.applicationMetrics = applicationMetrics;
        return this;
    }
    public String[] causes;
    public DescribeEnvironmentHealthResult withCauses(String[] causes) {
        this.causes = causes;
        return this;
    }
    public String color;
    public DescribeEnvironmentHealthResult withColor(String color) {
        this.color = color;
        return this;
    }
    public String environmentName;
    public DescribeEnvironmentHealthResult withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    public String healthStatus;
    public DescribeEnvironmentHealthResult withHealthStatus(String healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    public InstanceHealthSummary instancesHealth;
    public DescribeEnvironmentHealthResult withInstancesHealth(InstanceHealthSummary instancesHealth) {
        this.instancesHealth = instancesHealth;
        return this;
    }
    public OffsetDateTime refreshedAt;
    public DescribeEnvironmentHealthResult withRefreshedAt(OffsetDateTime refreshedAt) {
        this.refreshedAt = refreshedAt;
        return this;
    }
    public EnvironmentHealthEnum status;
    public DescribeEnvironmentHealthResult withStatus(EnvironmentHealthEnum status) {
        this.status = status;
        return this;
    }
}