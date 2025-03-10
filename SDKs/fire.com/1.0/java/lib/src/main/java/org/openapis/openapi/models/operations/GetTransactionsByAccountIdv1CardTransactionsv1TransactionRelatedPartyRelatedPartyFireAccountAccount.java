/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTransactionsByAccountIdv1CardTransactionsv1TransactionRelatedPartyRelatedPartyFireAccountAccount {
    /**
     * the Account Number of the account.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;

    public GetTransactionsByAccountIdv1CardTransactionsv1TransactionRelatedPartyRelatedPartyFireAccountAccount withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    
    /**
     * the name the user gives to the account to help them identify it.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias")
    public String alias;

    public GetTransactionsByAccountIdv1CardTransactionsv1TransactionRelatedPartyRelatedPartyFireAccountAccount withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    
    /**
     * the BIC of the account (provided if currency is EUR).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bic")
    public String bic;

    public GetTransactionsByAccountIdv1CardTransactionsv1TransactionRelatedPartyRelatedPartyFireAccountAccount withBic(String bic) {
        this.bic = bic;
        return this;
    }
    
    /**
     * the IBAN of the account (provided if currency is EUR).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;

    public GetTransactionsByAccountIdv1CardTransactionsv1TransactionRelatedPartyRelatedPartyFireAccountAccount withIban(String iban) {
        this.iban = iban;
        return this;
    }
    
    /**
     * identifier for the fire.com account (assigned by fire.com)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;

    public GetTransactionsByAccountIdv1CardTransactionsv1TransactionRelatedPartyRelatedPartyFireAccountAccount withId(Long id) {
        this.id = id;
        return this;
    }
    
    /**
     * the Sort Code of the account.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nsc")
    public String nsc;

    public GetTransactionsByAccountIdv1CardTransactionsv1TransactionRelatedPartyRelatedPartyFireAccountAccount withNsc(String nsc) {
        this.nsc = nsc;
        return this;
    }
    
    public GetTransactionsByAccountIdv1CardTransactionsv1TransactionRelatedPartyRelatedPartyFireAccountAccount(){}
}
