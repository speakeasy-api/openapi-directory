/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * FileTypeEnum - The type of resource. Could be file, folder or url
 */
public enum FileTypeEnum {
    FILE("file"),
    FOLDER("folder"),
    URL("url");

    @JsonValue
    public final String value;

    private FileTypeEnum(String value) {
        this.value = value;
    }
}
