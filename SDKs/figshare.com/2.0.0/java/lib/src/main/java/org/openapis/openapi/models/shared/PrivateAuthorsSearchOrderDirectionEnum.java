/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * PrivateAuthorsSearchOrderDirectionEnum - Direction of ordering
 */
public enum PrivateAuthorsSearchOrderDirectionEnum {
    ASC("asc"),
    DESC("desc");

    @JsonValue
    public final String value;

    private PrivateAuthorsSearchOrderDirectionEnum(String value) {
        this.value = value;
    }
}
