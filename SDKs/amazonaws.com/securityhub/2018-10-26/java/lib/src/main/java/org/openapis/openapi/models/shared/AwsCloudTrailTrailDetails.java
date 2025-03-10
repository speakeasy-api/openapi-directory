/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AwsCloudTrailTrailDetails - Provides details about a CloudTrail trail.
 */
public class AwsCloudTrailTrailDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLogsLogGroupArn")
    public String cloudWatchLogsLogGroupArn;

    public AwsCloudTrailTrailDetails withCloudWatchLogsLogGroupArn(String cloudWatchLogsLogGroupArn) {
        this.cloudWatchLogsLogGroupArn = cloudWatchLogsLogGroupArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLogsRoleArn")
    public String cloudWatchLogsRoleArn;

    public AwsCloudTrailTrailDetails withCloudWatchLogsRoleArn(String cloudWatchLogsRoleArn) {
        this.cloudWatchLogsRoleArn = cloudWatchLogsRoleArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HasCustomEventSelectors")
    public Boolean hasCustomEventSelectors;

    public AwsCloudTrailTrailDetails withHasCustomEventSelectors(Boolean hasCustomEventSelectors) {
        this.hasCustomEventSelectors = hasCustomEventSelectors;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeRegion")
    public String homeRegion;

    public AwsCloudTrailTrailDetails withHomeRegion(String homeRegion) {
        this.homeRegion = homeRegion;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeGlobalServiceEvents")
    public Boolean includeGlobalServiceEvents;

    public AwsCloudTrailTrailDetails withIncludeGlobalServiceEvents(Boolean includeGlobalServiceEvents) {
        this.includeGlobalServiceEvents = includeGlobalServiceEvents;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsMultiRegionTrail")
    public Boolean isMultiRegionTrail;

    public AwsCloudTrailTrailDetails withIsMultiRegionTrail(Boolean isMultiRegionTrail) {
        this.isMultiRegionTrail = isMultiRegionTrail;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsOrganizationTrail")
    public Boolean isOrganizationTrail;

    public AwsCloudTrailTrailDetails withIsOrganizationTrail(Boolean isOrganizationTrail) {
        this.isOrganizationTrail = isOrganizationTrail;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;

    public AwsCloudTrailTrailDetails withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogFileValidationEnabled")
    public Boolean logFileValidationEnabled;

    public AwsCloudTrailTrailDetails withLogFileValidationEnabled(Boolean logFileValidationEnabled) {
        this.logFileValidationEnabled = logFileValidationEnabled;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;

    public AwsCloudTrailTrailDetails withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BucketName")
    public String s3BucketName;

    public AwsCloudTrailTrailDetails withS3BucketName(String s3BucketName) {
        this.s3BucketName = s3BucketName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3KeyPrefix")
    public String s3KeyPrefix;

    public AwsCloudTrailTrailDetails withS3KeyPrefix(String s3KeyPrefix) {
        this.s3KeyPrefix = s3KeyPrefix;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnsTopicArn")
    public String snsTopicArn;

    public AwsCloudTrailTrailDetails withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnsTopicName")
    public String snsTopicName;

    public AwsCloudTrailTrailDetails withSnsTopicName(String snsTopicName) {
        this.snsTopicName = snsTopicName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrailArn")
    public String trailArn;

    public AwsCloudTrailTrailDetails withTrailArn(String trailArn) {
        this.trailArn = trailArn;
        return this;
    }
    
    public AwsCloudTrailTrailDetails(){}
}
