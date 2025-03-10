/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ReminderProfilesDeleteSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2,name=Authorization")
    public String drchronoOauth2;

    public ReminderProfilesDeleteSecurity withDrchronoOauth2(String drchronoOauth2) {
        this.drchronoOauth2 = drchronoOauth2;
        return this;
    }
    
    public ReminderProfilesDeleteSecurity(@JsonProperty("drchrono_oauth2") String drchronoOauth2) {
        this.drchronoOauth2 = drchronoOauth2;
  }
}
