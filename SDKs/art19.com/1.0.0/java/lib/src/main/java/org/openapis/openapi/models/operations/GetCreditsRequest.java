/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetCreditsRequest {
    /**
     * Limit the result to credits for the entity with this ID only. If the entity is not
     * published, the credential needs to have the right privilege to list the credits for it.
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=creditable_id")
    public String creditableId;

    public GetCreditsRequest withCreditableId(String creditableId) {
        this.creditableId = creditableId;
        return this;
    }
    
    /**
     * Limit the result to credits linked to this type of entity only.
     * Depending on the privileges of the credential, this list might be further reduced to
     * only published entities.
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=creditable_type")
    public GetCreditsCreditableTypeEnum creditableType;

    public GetCreditsRequest withCreditableType(GetCreditsCreditableTypeEnum creditableType) {
        this.creditableType = creditableType;
        return this;
    }
    
    /**
     * The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.
     * The brackets *MUST* be percent-encoded, per the requirements in
     * [RFC 3986 \u00a7 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids[]")
    public String[] ids;

    public GetCreditsRequest withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    
    /**
     * Select which page number to receive results for. Pages are numbered starting at 1.
     * 
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[number]")
    public Long pageNumber;

    public GetCreditsRequest withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    
    /**
     * Indicate how many records to return per page. The maximum is 100.
     * 
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[size]")
    public Long pageSize;

    public GetCreditsRequest withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    
    /**
     * Specify how to sort the result. Please refer to either the top section or the
     * [JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=sort")
    public GetCreditsSortEnum[] sort;

    public GetCreditsRequest withSort(GetCreditsSortEnum[] sort) {
        this.sort = sort;
        return this;
    }
    
    public GetCreditsRequest(){}
}
