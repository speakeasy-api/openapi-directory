/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * StatusEnum - &lt;p&gt;The deployment status of a resource. Status can be one of the following:&lt;/p&gt; &lt;p&gt;PENDING: Amazon Route 53 Application Recovery Controller is creating the resource.&lt;/p&gt; &lt;p&gt;DEPLOYED: The resource is deployed and ready to use.&lt;/p&gt; &lt;p&gt;PENDING_DELETION: Amazon Route 53 Application Recovery Controller is deleting the resource.&lt;/p&gt;
 */
public enum StatusEnum {
    PENDING("PENDING"),
    DEPLOYED("DEPLOYED"),
    PENDING_DELETION("PENDING_DELETION");

    @JsonValue
    public final String value;

    private StatusEnum(String value) {
        this.value = value;
    }
}
