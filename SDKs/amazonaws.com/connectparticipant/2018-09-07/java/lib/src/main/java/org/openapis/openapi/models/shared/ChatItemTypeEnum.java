/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ChatItemTypeEnum {
    TYPING("TYPING"),
    PARTICIPANT_JOINED("PARTICIPANT_JOINED"),
    PARTICIPANT_LEFT("PARTICIPANT_LEFT"),
    CHAT_ENDED("CHAT_ENDED"),
    TRANSFER_SUCCEEDED("TRANSFER_SUCCEEDED"),
    TRANSFER_FAILED("TRANSFER_FAILED"),
    MESSAGE("MESSAGE"),
    EVENT("EVENT"),
    ATTACHMENT("ATTACHMENT"),
    CONNECTION_ACK("CONNECTION_ACK"),
    MESSAGE_DELIVERED("MESSAGE_DELIVERED"),
    MESSAGE_READ("MESSAGE_READ");

    @JsonValue
    public final String value;

    private ChatItemTypeEnum(String value) {
        this.value = value;
    }
}
