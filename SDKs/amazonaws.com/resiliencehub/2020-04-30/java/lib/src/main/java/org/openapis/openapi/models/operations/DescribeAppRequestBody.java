/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAppRequestBody {
    /**
     * The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:&lt;code&gt;partition&lt;/code&gt;:resiliencehub:&lt;code&gt;region&lt;/code&gt;:&lt;code&gt;account&lt;/code&gt;:app/&lt;code&gt;app-id&lt;/code&gt;. For more information about ARNs, see &lt;a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"&gt; Amazon Resource Names (ARNs)&lt;/a&gt; in the &lt;i&gt;AWS General Reference&lt;/i&gt; guide.
     */
    @JsonProperty("appArn")
    public String appArn;

    public DescribeAppRequestBody withAppArn(String appArn) {
        this.appArn = appArn;
        return this;
    }
    
    public DescribeAppRequestBody(@JsonProperty("appArn") String appArn) {
        this.appArn = appArn;
  }
}
