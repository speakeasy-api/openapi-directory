/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResourceDetails - Contains details about the resource involved in the finding.
 */
public class ResourceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsEc2Instance")
    public AwsEc2InstanceDetails awsEc2Instance;

    public ResourceDetails withAwsEc2Instance(AwsEc2InstanceDetails awsEc2Instance) {
        this.awsEc2Instance = awsEc2Instance;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsEcrContainerImage")
    public AwsEcrContainerImageDetails awsEcrContainerImage;

    public ResourceDetails withAwsEcrContainerImage(AwsEcrContainerImageDetails awsEcrContainerImage) {
        this.awsEcrContainerImage = awsEcrContainerImage;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsLambdaFunction")
    public AwsLambdaFunctionDetails awsLambdaFunction;

    public ResourceDetails withAwsLambdaFunction(AwsLambdaFunctionDetails awsLambdaFunction) {
        this.awsLambdaFunction = awsLambdaFunction;
        return this;
    }
    
    public ResourceDetails(){}
}
