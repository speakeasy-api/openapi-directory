/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Obcer404ApplicationJSONErrorDescriptionEnum {
    NO_RECORD_FOUND("No record found"),
    YOUR_API_URL_OR_PATH_IS_INCORRECT("Your API url or path is incorrect");

    @JsonValue
    public final String value;

    private Obcer404ApplicationJSONErrorDescriptionEnum(String value) {
        this.value = value;
    }
}
