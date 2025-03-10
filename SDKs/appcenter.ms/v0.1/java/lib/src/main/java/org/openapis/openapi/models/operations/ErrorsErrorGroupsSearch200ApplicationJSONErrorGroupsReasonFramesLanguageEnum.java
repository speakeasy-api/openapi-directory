/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ErrorsErrorGroupsSearch200ApplicationJSONErrorGroupsReasonFramesLanguageEnum - programming language of the frame
 */
public enum ErrorsErrorGroupsSearch200ApplicationJSONErrorGroupsReasonFramesLanguageEnum {
    JAVA_SCRIPT("JavaScript"),
    C_SHARP("CSharp"),
    OBJECTIVE_C("Objective-C"),
    OBJECTIVE_CPP("Objective-Cpp"),
    CPP("Cpp"),
    C("C"),
    SWIFT("Swift"),
    JAVA("Java"),
    UNKNOWN("Unknown");

    @JsonValue
    public final String value;

    private ErrorsErrorGroupsSearch200ApplicationJSONErrorGroupsReasonFramesLanguageEnum(String value) {
        this.value = value;
    }
}
