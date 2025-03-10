/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import org.openapis.openapi.utils.SpeakeasyMetadata;

/**
 * ExudeBean - Filter the stopping words from the provided input data or links
 */
public class ExudeBean {
    @SpeakeasyMetadata("multipartForm:name=data")
    public String data;

    public ExudeBean withData(String data) {
        this.data = data;
        return this;
    }
    
    @SpeakeasyMetadata("multipartForm:name=links")
    public String[] links;

    public ExudeBean withLinks(String[] links) {
        this.links = links;
        return this;
    }
    
    public ExudeBean(){}
}
