/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionRelatedPartyRelatedPartyPayee - Details of the related third party involved in the transaction.
 */
public class GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionRelatedPartyRelatedPartyPayee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionRelatedPartyRelatedPartyPayeeAccount account;

    public GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionRelatedPartyRelatedPartyPayee withAccount(GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionRelatedPartyRelatedPartyPayeeAccount account) {
        this.account = account;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionRelatedPartyRelatedPartyPayeeTypeEnum type;

    public GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionRelatedPartyRelatedPartyPayee withType(GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionRelatedPartyRelatedPartyPayeeTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public GetTransactionsByAccountIdFilteredCardTransactionsv1TransactionRelatedPartyRelatedPartyPayee(){}
}
