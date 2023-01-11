package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserData
 * A script that runs on first launch of an Amazon EC2 instance. Used for configuring the server during launch.
**/
public class UserData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Location")
    public S3Location s3Location;
    public UserData withS3Location(S3Location s3Location) {
        this.s3Location = s3Location;
        return this;
    }
}