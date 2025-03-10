/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CreditRoleEnum - The type of role the credit performed, e.g. actor.
 */
public enum CreditRoleEnum {
    ACTOR("actor"),
    ASSOCIATEPRODUCER("associateproducer"),
    COACTOR("coactor"),
    DIRECTOR("director"),
    EXECUTIVEPRODUCER("executiveproducer"),
    FILMINGLOCATION("filminglocation"),
    GUEST("guest"),
    NARRATOR("narrator"),
    OTHER("other"),
    PRESENTER("presenter"),
    PRODUCER("producer"),
    PRODUCTMANAGER("productmanager"),
    THEMEMUSICBY("thememusicby"),
    VOICE("voice"),
    WRITER("writer");

    @JsonValue
    public final String value;

    private CreditRoleEnum(String value) {
        this.value = value;
    }
}
