/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DoctorMessageTypeEnum - 
 * Value | Description
 * ----- | -----------
 * `"GP"` | Generated PDF
 * `"GC"` | Generated CSV
 * `"GZ"` | Generated ZIP
 * `"IF"` | Incoming Fax
 * `"OF"` | Outgoing Fax
 * `"IL"` | Incoming Labs
 * `"IR"` | Inbound Referrals
 * `"OR"` | Outbound Referrals
 * `"IE"` | Incoming eRx
 * `"OA"` | Online Appointments
 * `"PO"` | Patient Onboarding
 * `"PI"` | Patient Incoming Message
 * `"PM"` | Patient Outgoing Message
 * `"OO"` | Demo Meeting Message
 * `"OD"` | Outbound Direct Message
 * `"ID"` | Inbound Direct Message
 * 
 */
public enum DoctorMessageTypeEnum {
    GP("GP"),
    GC("GC"),
    GT("GT"),
    GZ("GZ"),
    IF_("IF"),
    OF("OF"),
    IL("IL"),
    IR("IR"),
    OR("OR"),
    IE("IE"),
    OA("OA"),
    PO("PO"),
    PI("PI"),
    PM("PM"),
    OO("OO"),
    OD("OD"),
    ID("ID"),
    DL("DL"),
    CN("CN");

    @JsonValue
    public final String value;

    private DoctorMessageTypeEnum(String value) {
        this.value = value;
    }
}
