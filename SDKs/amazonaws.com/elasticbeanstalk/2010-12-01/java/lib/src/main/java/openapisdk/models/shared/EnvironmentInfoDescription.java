package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * EnvironmentInfoDescription
 * The information retrieved from the Amazon EC2 instances.
**/
public class EnvironmentInfoDescription {
    public String ec2InstanceId;
    public EnvironmentInfoDescription withEc2InstanceId(String ec2InstanceId) {
        this.ec2InstanceId = ec2InstanceId;
        return this;
    }
    public EnvironmentInfoTypeEnum infoType;
    public EnvironmentInfoDescription withInfoType(EnvironmentInfoTypeEnum infoType) {
        this.infoType = infoType;
        return this;
    }
    public String message;
    public EnvironmentInfoDescription withMessage(String message) {
        this.message = message;
        return this;
    }
    public OffsetDateTime sampleTimestamp;
    public EnvironmentInfoDescription withSampleTimestamp(OffsetDateTime sampleTimestamp) {
        this.sampleTimestamp = sampleTimestamp;
        return this;
    }
}