package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeployAsApplicationConfigurationDescription
 * The configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.
**/
public class DeployAsApplicationConfigurationDescription {
    @JsonProperty("S3ContentLocationDescription")
    public S3ContentBaseLocationDescription s3ContentLocationDescription;
    public DeployAsApplicationConfigurationDescription withS3ContentLocationDescription(S3ContentBaseLocationDescription s3ContentLocationDescription) {
        this.s3ContentLocationDescription = s3ContentLocationDescription;
        return this;
    }
}