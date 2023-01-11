package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DmsTransferSettings
 *  The settings in JSON format for the DMS Transfer type source endpoint. 
**/
public class DmsTransferSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BucketName")
    public String bucketName;
    public DmsTransferSettings withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceAccessRoleArn")
    public String serviceAccessRoleArn;
    public DmsTransferSettings withServiceAccessRoleArn(String serviceAccessRoleArn) {
        this.serviceAccessRoleArn = serviceAccessRoleArn;
        return this;
    }
}