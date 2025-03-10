/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ReleasesUpdateReleaseUploadStatusSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header,name=X-API-Token")
    public String apiToken;

    public ReleasesUpdateReleaseUploadStatusSecurity withAPIToken(String apiToken) {
        this.apiToken = apiToken;
        return this;
    }
    
    public ReleasesUpdateReleaseUploadStatusSecurity(@JsonProperty("APIToken") String apiToken) {
        this.apiToken = apiToken;
  }
}
