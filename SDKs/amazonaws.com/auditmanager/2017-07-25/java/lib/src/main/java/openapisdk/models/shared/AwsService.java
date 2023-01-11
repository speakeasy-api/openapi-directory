package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsService
 *  An Amazon Web Service such as Amazon S3, CloudTrail, and so on. 
**/
public class AwsService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public AwsService withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}