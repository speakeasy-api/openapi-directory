/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * NotificationsGetAppEmailSettings200ApplicationJSONSettingsValueEnum - Frequency of event
 */
public enum NotificationsGetAppEmailSettings200ApplicationJSONSettingsValueEnum {
    DISABLED("Disabled"),
    INDIVIDUAL("Individual"),
    DAILY("Daily"),
    DAILY_AND_INDIVIDUAL("DailyAndIndividual"),
    DEFAULT_("Default");

    @JsonValue
    public final String value;

    private NotificationsGetAppEmailSettings200ApplicationJSONSettingsValueEnum(String value) {
        this.value = value;
    }
}
