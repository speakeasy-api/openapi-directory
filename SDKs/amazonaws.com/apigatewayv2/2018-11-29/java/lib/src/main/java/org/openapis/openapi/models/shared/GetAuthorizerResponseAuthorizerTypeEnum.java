/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GetAuthorizerResponseAuthorizerTypeEnum - The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
 */
public enum GetAuthorizerResponseAuthorizerTypeEnum {
    REQUEST("REQUEST"),
    JWT("JWT");

    @JsonValue
    public final String value;

    private GetAuthorizerResponseAuthorizerTypeEnum(String value) {
        this.value = value;
    }
}
