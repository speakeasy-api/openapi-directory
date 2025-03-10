/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UserCurrentListStarredRequest {
    /**
     * page size of results
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;

    public UserCurrentListStarredRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    
    /**
     * page number of results to return (1-based)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;

    public UserCurrentListStarredRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    public UserCurrentListStarredRequest(){}
}
