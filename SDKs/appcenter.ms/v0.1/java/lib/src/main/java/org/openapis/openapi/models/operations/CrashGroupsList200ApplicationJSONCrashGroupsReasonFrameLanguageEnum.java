/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CrashGroupsList200ApplicationJSONCrashGroupsReasonFrameLanguageEnum - programming language of the frame
 */
public enum CrashGroupsList200ApplicationJSONCrashGroupsReasonFrameLanguageEnum {
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

    private CrashGroupsList200ApplicationJSONCrashGroupsReasonFrameLanguageEnum(String value) {
        this.value = value;
    }
}
