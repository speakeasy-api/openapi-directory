/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class Listtransactionsbyaddress1Request {
    /**
     * account address
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;

    public Listtransactionsbyaddress1Request withAddress(String address) {
        this.address = address;
        return this;
    }
    
    /**
     * Current page, see description for more informatiosn how pagination works
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=page")
    public String page;

    public Listtransactionsbyaddress1Request withPage(String page) {
        this.page = page;
        return this;
    }
    
    public Listtransactionsbyaddress1Request(@JsonProperty("address") String address, @JsonProperty("page") String page) {
        this.address = address;
        this.page = page;
  }
}
