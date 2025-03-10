/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDate;

public class SubmitRequest {
    /**
     * This field contains additional data, which may be required for a particular request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalData")
    public java.util.Map<String, String> additionalData;

    public SubmitRequest withAdditionalData(java.util.Map<String, String> additionalData) {
        this.additionalData = additionalData;
        return this;
    }
    
    @JsonProperty("amount")
    public Amount amount;

    public SubmitRequest withAmount(Amount amount) {
        this.amount = amount;
        return this;
    }
    
    /**
     * The date of birth.
     * Format: ISO-8601; example: YYYY-MM-DD
     * 
     * For Paysafecard it must be the same as used when registering the Paysafecard account.
     * 
     * &gt; This field is mandatory for natural persons. 
     * &gt; This field is required to update the existing `dateOfBirth` that is associated with this recurring contract.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @JsonProperty("dateOfBirth")
    public LocalDate dateOfBirth;

    public SubmitRequest withDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    
    /**
     * The type of the entity the payout is processed for.
     * 
     * Allowed values:
     * * NaturalPerson
     * * Company
     * &gt; This field is required to update the existing `entityType` that is associated with this recurring contract.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityType")
    public SubmitRequestEntityTypeEnum entityType;

    public SubmitRequest withEntityType(SubmitRequestEntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    
    /**
     * An integer value that is added to the normal fraud score. The value can be either positive or negative.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fraudOffset")
    public Integer fraudOffset;

    public SubmitRequest withFraudOffset(Integer fraudOffset) {
        this.fraudOffset = fraudOffset;
        return this;
    }
    
    /**
     * The merchant account identifier you want to process the transaction request with.
     */
    @JsonProperty("merchantAccount")
    public String merchantAccount;

    public SubmitRequest withMerchantAccount(String merchantAccount) {
        this.merchantAccount = merchantAccount;
        return this;
    }
    
    /**
     * The shopper's nationality.
     * 
     * A valid value is an ISO 2-character country code (e.g. 'NL').
     * 
     * &gt; This field is required to update the existing nationality that is associated with this recurring contract.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nationality")
    public String nationality;

    public SubmitRequest withNationality(String nationality) {
        this.nationality = nationality;
        return this;
    }
    
    @JsonProperty("recurring")
    public Recurring recurring;

    public SubmitRequest withRecurring(Recurring recurring) {
        this.recurring = recurring;
        return this;
    }
    
    /**
     * The merchant reference for this payout. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement.
     */
    @JsonProperty("reference")
    public String reference;

    public SubmitRequest withReference(String reference) {
        this.reference = reference;
        return this;
    }
    
    /**
     * This is the `recurringDetailReference` you want to use for this payout.
     * 
     * You can use the value LATEST to select the most recently used recurring detail.
     */
    @JsonProperty("selectedRecurringDetailReference")
    public String selectedRecurringDetailReference;

    public SubmitRequest withSelectedRecurringDetailReference(String selectedRecurringDetailReference) {
        this.selectedRecurringDetailReference = selectedRecurringDetailReference;
        return this;
    }
    
    /**
     * The shopper's email address.
     */
    @JsonProperty("shopperEmail")
    public String shopperEmail;

    public SubmitRequest withShopperEmail(String shopperEmail) {
        this.shopperEmail = shopperEmail;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shopperName")
    public Name shopperName;

    public SubmitRequest withShopperName(Name shopperName) {
        this.shopperName = shopperName;
        return this;
    }
    
    /**
     * The shopper's reference for the payout transaction.
     */
    @JsonProperty("shopperReference")
    public String shopperReference;

    public SubmitRequest withShopperReference(String shopperReference) {
        this.shopperReference = shopperReference;
        return this;
    }
    
    /**
     * The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shopperStatement")
    public String shopperStatement;

    public SubmitRequest withShopperStatement(String shopperStatement) {
        this.shopperStatement = shopperStatement;
        return this;
    }
    
    /**
     * The shopper's social security number.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("socialSecurityNumber")
    public String socialSecurityNumber;

    public SubmitRequest withSocialSecurityNumber(String socialSecurityNumber) {
        this.socialSecurityNumber = socialSecurityNumber;
        return this;
    }
    
    public SubmitRequest(@JsonProperty("amount") Amount amount, @JsonProperty("merchantAccount") String merchantAccount, @JsonProperty("recurring") Recurring recurring, @JsonProperty("reference") String reference, @JsonProperty("selectedRecurringDetailReference") String selectedRecurringDetailReference, @JsonProperty("shopperEmail") String shopperEmail, @JsonProperty("shopperReference") String shopperReference) {
        this.amount = amount;
        this.merchantAccount = merchantAccount;
        this.recurring = recurring;
        this.reference = reference;
        this.selectedRecurringDetailReference = selectedRecurringDetailReference;
        this.shopperEmail = shopperEmail;
        this.shopperReference = shopperReference;
  }
}
