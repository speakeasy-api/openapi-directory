/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Rmcer404ApplicationJSONErrorEnum {
    RECORD_NOT_FOUND("record_not_found"),
    URL_NOT_FOUND("url_not_found");

    @JsonValue
    public final String value;

    private Rmcer404ApplicationJSONErrorEnum(String value) {
        this.value = value;
    }
}
