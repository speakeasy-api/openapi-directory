/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * KYCCheckStatusDataTypeEnum - The type of check.
 * 
 * Possible values:
 * 
 *  * **BANK_ACCOUNT_VERIFICATION**: Used in v5 and earlier. Replaced by **PAYOUT_METHOD_VERIFICATION** in v6 and later.
 * 
 *  * **COMPANY_VERIFICATION**
 * 
 *   * **CARD_VERIFICATION**
 * 
 * * **IDENTITY_VERIFICATION**
 * 
 * * **LEGAL_ARRANGEMENT_VERIFICATION**
 * 
 * * **NONPROFIT_VERIFICATION**
 * 
 *  * **PASSPORT_VERIFICATION**
 * 
 * * **PAYOUT_METHOD_VERIFICATION**: Used in v6 and later.
 * 
 * * **PCI_VERIFICATION**
 */
public enum KYCCheckStatusDataTypeEnum {
    BANK_ACCOUNT_VERIFICATION("BANK_ACCOUNT_VERIFICATION"),
    CARD_VERIFICATION("CARD_VERIFICATION"),
    COMPANY_VERIFICATION("COMPANY_VERIFICATION"),
    IDENTITY_VERIFICATION("IDENTITY_VERIFICATION"),
    LEGAL_ARRANGEMENT_VERIFICATION("LEGAL_ARRANGEMENT_VERIFICATION"),
    NONPROFIT_VERIFICATION("NONPROFIT_VERIFICATION"),
    PASSPORT_VERIFICATION("PASSPORT_VERIFICATION"),
    PAYOUT_METHOD_VERIFICATION("PAYOUT_METHOD_VERIFICATION"),
    PCI_VERIFICATION("PCI_VERIFICATION");

    @JsonValue
    public final String value;

    private KYCCheckStatusDataTypeEnum(String value) {
        this.value = value;
    }
}
