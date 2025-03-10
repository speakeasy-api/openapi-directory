/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class QuittungPrepareRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public String account;

    public QuittungPrepareRequestBody withAccount(String account) {
        this.account = account;
        return this;
    }
    
    public QuittungPrepareRequestBody(){}
}
