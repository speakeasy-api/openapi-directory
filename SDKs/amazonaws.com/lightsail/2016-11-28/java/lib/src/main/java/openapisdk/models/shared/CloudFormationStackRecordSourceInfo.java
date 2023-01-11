package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudFormationStackRecordSourceInfo
 * Describes the source of a CloudFormation stack record (i.e., the export snapshot record).
**/
public class CloudFormationStackRecordSourceInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public CloudFormationStackRecordSourceInfo withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CloudFormationStackRecordSourceInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public CloudFormationStackRecordSourceTypeEnum resourceType;
    public CloudFormationStackRecordSourceInfo withResourceType(CloudFormationStackRecordSourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}