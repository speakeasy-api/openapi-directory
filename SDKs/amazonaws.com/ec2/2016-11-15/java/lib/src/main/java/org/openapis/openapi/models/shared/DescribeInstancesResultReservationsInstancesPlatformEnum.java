/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DescribeInstancesResultReservationsInstancesPlatformEnum - The value is &lt;code&gt;Windows&lt;/code&gt; for Windows instances; otherwise blank.
 */
public enum DescribeInstancesResultReservationsInstancesPlatformEnum {
    WINDOWS("Windows");

    @JsonValue
    public final String value;

    private DescribeInstancesResultReservationsInstancesPlatformEnum(String value) {
        this.value = value;
    }
}
