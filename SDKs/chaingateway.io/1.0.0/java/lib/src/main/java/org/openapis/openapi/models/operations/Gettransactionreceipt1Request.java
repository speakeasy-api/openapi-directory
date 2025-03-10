/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class Gettransactionreceipt1Request {
    /**
     * Transaction hash
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transaction")
    public String transaction;

    public Gettransactionreceipt1Request withTransaction(String transaction) {
        this.transaction = transaction;
        return this;
    }
    
    public Gettransactionreceipt1Request(@JsonProperty("transaction") String transaction) {
        this.transaction = transaction;
  }
}
