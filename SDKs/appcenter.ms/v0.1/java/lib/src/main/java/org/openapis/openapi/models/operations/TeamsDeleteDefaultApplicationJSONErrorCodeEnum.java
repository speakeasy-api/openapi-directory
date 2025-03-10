/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

public enum TeamsDeleteDefaultApplicationJSONErrorCodeEnum {
    BAD_REQUEST("BadRequest"),
    CONFLICT("Conflict"),
    NOT_ACCEPTABLE("NotAcceptable"),
    NOT_FOUND("NotFound"),
    INTERNAL_SERVER_ERROR("InternalServerError"),
    UNAUTHORIZED("Unauthorized"),
    TOO_MANY_REQUESTS("TooManyRequests");

    @JsonValue
    public final String value;

    private TeamsDeleteDefaultApplicationJSONErrorCodeEnum(String value) {
        this.value = value;
    }
}
