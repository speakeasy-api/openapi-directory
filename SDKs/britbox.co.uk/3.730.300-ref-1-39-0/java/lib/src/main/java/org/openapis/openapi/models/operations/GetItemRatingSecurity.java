/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetItemRatingSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2,name=Authorization")
    public String profileAuth;

    public GetItemRatingSecurity withProfileAuth(String profileAuth) {
        this.profileAuth = profileAuth;
        return this;
    }
    
    public GetItemRatingSecurity(@JsonProperty("profileAuth") String profileAuth) {
        this.profileAuth = profileAuth;
  }
}
