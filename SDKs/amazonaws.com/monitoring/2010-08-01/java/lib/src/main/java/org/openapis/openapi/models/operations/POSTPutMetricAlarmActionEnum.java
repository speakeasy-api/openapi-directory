/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * POSTPutMetricAlarmActionEnum
 */
public enum POSTPutMetricAlarmActionEnum {
    PUT_METRIC_ALARM("PutMetricAlarm");

    @JsonValue
    public final String value;

    private POSTPutMetricAlarmActionEnum(String value) {
        this.value = value;
    }
}
