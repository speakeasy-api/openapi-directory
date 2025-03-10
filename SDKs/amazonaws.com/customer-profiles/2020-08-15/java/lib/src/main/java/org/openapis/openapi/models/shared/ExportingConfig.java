/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExportingConfig - &lt;p&gt;Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. &lt;/p&gt; &lt;note&gt; &lt;p&gt;You need to give Customer Profiles service principal write permission to your S3 bucket. Otherwise, you'll get an exception in the API response. For an example policy, see &lt;a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service"&gt;Amazon Connect Customer Profiles cross-service confused deputy prevention&lt;/a&gt;. &lt;/p&gt; &lt;/note&gt;
 */
public class ExportingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Exporting")
    public S3ExportingConfig s3Exporting;

    public ExportingConfig withS3Exporting(S3ExportingConfig s3Exporting) {
        this.s3Exporting = s3Exporting;
        return this;
    }
    
    public ExportingConfig(){}
}
