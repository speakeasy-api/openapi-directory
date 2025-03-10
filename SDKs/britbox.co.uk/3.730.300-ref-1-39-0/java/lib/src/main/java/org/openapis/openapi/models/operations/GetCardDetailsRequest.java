/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetCardDetailsRequest {
    /**
     * ITV profile token in body.
     */
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.ItvGetCardDetailsRequest itvGetCardDetailsRequest;

    public GetCardDetailsRequest withItvGetCardDetailsRequest(org.openapis.openapi.models.shared.ItvGetCardDetailsRequest itvGetCardDetailsRequest) {
        this.itvGetCardDetailsRequest = itvGetCardDetailsRequest;
        return this;
    }
    
    /**
     * Language code for the preferred language to be returned in the response.
     * 
     * Parameter value is case-insensitive and should be
     *   - a valid 2 letter language code without region such as en, de
     *   - or with region such as en_us, en_au
     * 
     * If undefined then defaults to 'en', unless the server has been configured
     * with a custom default.
     * 
     * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public String lang;

    public GetCardDetailsRequest withLang(String lang) {
        this.lang = lang;
        return this;
    }
    
    /**
     * The identifier of the payment platform (stripe/itunes).
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=platform")
    public String platform;

    public GetCardDetailsRequest withPlatform(String platform) {
        this.platform = platform;
        return this;
    }
    
    public GetCardDetailsRequest(@JsonProperty("ItvGetCardDetailsRequest") org.openapis.openapi.models.shared.ItvGetCardDetailsRequest itvGetCardDetailsRequest, @JsonProperty("platform") String platform) {
        this.itvGetCardDetailsRequest = itvGetCardDetailsRequest;
        this.platform = platform;
  }
}
