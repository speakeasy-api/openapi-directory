/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ScheduleTerminalActionsResponse - OK - the request has succeeded.
 */
public class ScheduleTerminalActionsResponse {
    /**
     * Information about the action to take.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionDetails")
    public Object actionDetails;

    public ScheduleTerminalActionsResponse withActionDetails(Object actionDetails) {
        this.actionDetails = actionDetails;
        return this;
    }
    
    /**
     * A list containing a terminal ID and an action ID for each terminal that the action was scheduled for.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public TerminalActionScheduleDetail[] items;

    public ScheduleTerminalActionsResponse withItems(TerminalActionScheduleDetail[] items) {
        this.items = items;
        return this;
    }
    
    /**
     * The date and time when the action should happen. 
     * Format: [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339), but without the **Z** before the time offset. For example, **2021-11-15T12:16:21+01:00** 
     * The action is sent with the first [maintenance call](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api#when-actions-take-effect) after the specified date and time in the time zone of the terminal. 
     * An empty value causes the action to be sent as soon as possible: at the next maintenance call.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledAt")
    public String scheduledAt;

    public ScheduleTerminalActionsResponse withScheduledAt(String scheduledAt) {
        this.scheduledAt = scheduledAt;
        return this;
    }
    
    /**
     * The unique ID of the [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/stores). If present, all terminals in the `terminalIds` list must be assigned to this store.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeId")
    public String storeId;

    public ScheduleTerminalActionsResponse withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
    
    /**
     * A list of unique IDs of the terminals that the action applies to.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminalIds")
    public String[] terminalIds;

    public ScheduleTerminalActionsResponse withTerminalIds(String[] terminalIds) {
        this.terminalIds = terminalIds;
        return this;
    }
    
    /**
     * The validation errors that occurred in the list of terminals, and for each error the IDs of the terminals that the error applies to.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminalsWithErrors")
    public java.util.Map<String, String[]> terminalsWithErrors;

    public ScheduleTerminalActionsResponse withTerminalsWithErrors(java.util.Map<String, String[]> terminalsWithErrors) {
        this.terminalsWithErrors = terminalsWithErrors;
        return this;
    }
    
    /**
     * The number of terminals for which scheduling the action failed.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalErrors")
    public Integer totalErrors;

    public ScheduleTerminalActionsResponse withTotalErrors(Integer totalErrors) {
        this.totalErrors = totalErrors;
        return this;
    }
    
    /**
     * The number of terminals for which the action was successfully scheduled. This doesn't mean the action has happened yet.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalScheduled")
    public Integer totalScheduled;

    public ScheduleTerminalActionsResponse withTotalScheduled(Integer totalScheduled) {
        this.totalScheduled = totalScheduled;
        return this;
    }
    
    public ScheduleTerminalActionsResponse(){}
}
