package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputDataConfig
 * The object that contains the Amazon S3 object location and access role required to train and tune your custom language model.
**/
public class InputDataConfig {
    @JsonProperty("DataAccessRoleArn")
    public String dataAccessRoleArn;
    public InputDataConfig withDataAccessRoleArn(String dataAccessRoleArn) {
        this.dataAccessRoleArn = dataAccessRoleArn;
        return this;
    }
    @JsonProperty("S3Uri")
    public String s3Uri;
    public InputDataConfig withS3Uri(String s3Uri) {
        this.s3Uri = s3Uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TuningDataS3Uri")
    public String tuningDataS3Uri;
    public InputDataConfig withTuningDataS3Uri(String tuningDataS3Uri) {
        this.tuningDataS3Uri = tuningDataS3Uri;
        return this;
    }
}