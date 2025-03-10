/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ProductNotifierSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header,name=user_key")
    public String userKey;

    public ProductNotifierSecurity withUserKey(String userKey) {
        this.userKey = userKey;
        return this;
    }
    
    public ProductNotifierSecurity(@JsonProperty("user_key") String userKey) {
        this.userKey = userKey;
  }
}
