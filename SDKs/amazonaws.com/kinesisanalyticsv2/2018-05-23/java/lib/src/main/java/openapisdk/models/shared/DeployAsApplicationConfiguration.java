package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeployAsApplicationConfiguration
 * The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state..
**/
public class DeployAsApplicationConfiguration {
    @JsonProperty("S3ContentLocation")
    public S3ContentBaseLocation s3ContentLocation;
    public DeployAsApplicationConfiguration withS3ContentLocation(S3ContentBaseLocation s3ContentLocation) {
        this.s3ContentLocation = s3ContentLocation;
        return this;
    }
}