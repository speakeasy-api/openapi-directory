/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.time.OffsetDateTime;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class SearchGlossaryRequest {
    /**
     * Archive change date from
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;

    public SearchGlossaryRequest withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    
    /**
     * Archive change date to
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;

    public SearchGlossaryRequest withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    
    /**
     * Archive create date from
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;

    public SearchGlossaryRequest withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    
    /**
     * Archive create date to
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;

    public SearchGlossaryRequest withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    
    /**
     * Search description
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;

    public SearchGlossaryRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * File suffix
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;

    public SearchGlossaryRequest withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    
    /**
     * From date
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;

    public SearchGlossaryRequest withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    
    /**
     * Parent entry
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;

    public SearchGlossaryRequest withGroup(String group) {
        this.group = group;
        return this;
    }
    
    /**
     * Max number of results
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;

    public SearchGlossaryRequest withMax(Long max) {
        this.max = max;
        return this;
    }
    
    /**
     * Northern bounds of search
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;

    public SearchGlossaryRequest withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    
    /**
     * Eastern bounds of search
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;

    public SearchGlossaryRequest withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    
    /**
     * Southern bounds of search
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;

    public SearchGlossaryRequest withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    
    /**
     * Western bounds of search
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;

    public SearchGlossaryRequest withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    
    /**
     * Search name
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;

    public SearchGlossaryRequest withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Number to skip
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;

    public SearchGlossaryRequest withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    
    /**
     * Search text
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;

    public SearchGlossaryRequest withText(String text) {
        this.text = text;
        return this;
    }
    
    /**
     * To date
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;

    public SearchGlossaryRequest withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
    
    public SearchGlossaryRequest(){}
}
