package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeployAsApplicationConfigurationUpdate
 * Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state..
**/
public class DeployAsApplicationConfigurationUpdate {
    @JsonProperty("S3ContentLocationUpdate")
    public S3ContentBaseLocationUpdate s3ContentLocationUpdate;
    public DeployAsApplicationConfigurationUpdate withS3ContentLocationUpdate(S3ContentBaseLocationUpdate s3ContentLocationUpdate) {
        this.s3ContentLocationUpdate = s3ContentLocationUpdate;
        return this;
    }
}