/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class StromkontoChoicesRequest {
    /**
     * Ethereum style address referencing a valid account alias (never use Stromkonto directly!).
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=account")
    public String account;

    public StromkontoChoicesRequest withAccount(String account) {
        this.account = account;
        return this;
    }
    
    public StromkontoChoicesRequest(){}
}
