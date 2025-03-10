/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetSubmissionCommentsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2,name=Authorization")
    public String oAuth2;

    public GetSubmissionCommentsSecurity withOAuth2(String oAuth2) {
        this.oAuth2 = oAuth2;
        return this;
    }
    
    public GetSubmissionCommentsSecurity(@JsonProperty("OAuth2") String oAuth2) {
        this.oAuth2 = oAuth2;
  }
}
