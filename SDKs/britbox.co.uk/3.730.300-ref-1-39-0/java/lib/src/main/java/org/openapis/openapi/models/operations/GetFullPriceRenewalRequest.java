/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetFullPriceRenewalRequest {
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

    public GetFullPriceRenewalRequest withLang(String lang) {
        this.lang = lang;
        return this;
    }
    
    public GetFullPriceRenewalRequest(){}
}
