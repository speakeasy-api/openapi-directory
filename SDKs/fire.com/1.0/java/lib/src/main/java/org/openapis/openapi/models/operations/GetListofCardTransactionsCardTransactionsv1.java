/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetListofCardTransactionsCardTransactionsv1 {
    /**
     * milisecond timestamp of date range to value.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRangeTo")
    public Long dateRangeTo;

    public GetListofCardTransactionsCardTransactionsv1 withDateRangeTo(Long dateRangeTo) {
        this.dateRangeTo = dateRangeTo;
        return this;
    }
    
    /**
     * The total number of card transactions in the list.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;

    public GetListofCardTransactionsCardTransactionsv1 withTotal(Long total) {
        this.total = total;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactions")
    public GetListofCardTransactionsCardTransactionsv1Transaction[] transactions;

    public GetListofCardTransactionsCardTransactionsv1 withTransactions(GetListofCardTransactionsCardTransactionsv1Transaction[] transactions) {
        this.transactions = transactions;
        return this;
    }
    
    public GetListofCardTransactionsCardTransactionsv1(){}
}
