/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class MetaGetOctocatRequest {
    /**
     * The words to show in Octocat's speech bubble
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=s")
    public String s;

    public MetaGetOctocatRequest withS(String s) {
        this.s = s;
        return this;
    }
    
    public MetaGetOctocatRequest(){}
}
