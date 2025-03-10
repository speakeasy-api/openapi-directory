/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GroupV2AddOptionalConversationSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2,name=Authorization")
    public String oauth2;

    public GroupV2AddOptionalConversationSecurity withOauth2(String oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
    
    public GroupV2AddOptionalConversationSecurity(@JsonProperty("oauth2") String oauth2) {
        this.oauth2 = oauth2;
  }
}
