/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * PayoutScheduleResponseScheduleEnum - The payout schedule of the account.
 * Permitted values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.
 */
public enum PayoutScheduleResponseScheduleEnum {
    BIWEEKLY_ON1_ST_AND15_TH_AT_MIDNIGHT("BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"),
    DAILY("DAILY"),
    DAILY_AU("DAILY_AU"),
    DAILY_EU("DAILY_EU"),
    DAILY_SG("DAILY_SG"),
    DAILY_US("DAILY_US"),
    HOLD("HOLD"),
    MONTHLY("MONTHLY"),
    WEEKLY("WEEKLY"),
    WEEKLY_MON_TO_FRI_AU("WEEKLY_MON_TO_FRI_AU"),
    WEEKLY_MON_TO_FRI_EU("WEEKLY_MON_TO_FRI_EU"),
    WEEKLY_MON_TO_FRI_US("WEEKLY_MON_TO_FRI_US"),
    WEEKLY_ON_TUE_FRI_MIDNIGHT("WEEKLY_ON_TUE_FRI_MIDNIGHT"),
    WEEKLY_SUN_TO_THU_AU("WEEKLY_SUN_TO_THU_AU"),
    WEEKLY_SUN_TO_THU_US("WEEKLY_SUN_TO_THU_US");

    @JsonValue
    public final String value;

    private PayoutScheduleResponseScheduleEnum(String value) {
        this.value = value;
    }
}
