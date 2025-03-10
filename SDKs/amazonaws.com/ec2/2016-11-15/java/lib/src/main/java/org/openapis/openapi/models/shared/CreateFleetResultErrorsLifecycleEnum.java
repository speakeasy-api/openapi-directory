/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CreateFleetResultErrorsLifecycleEnum - Indicates if the instance that could not be launched was a Spot Instance or On-Demand Instance.
 */
public enum CreateFleetResultErrorsLifecycleEnum {
    SPOT("spot"),
    ON_DEMAND("on-demand");

    @JsonValue
    public final String value;

    private CreateFleetResultErrorsLifecycleEnum(String value) {
        this.value = value;
    }
}
