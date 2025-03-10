/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CandidateSearch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public CandidateSearch withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public CandidateSearch withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office_sought")
    public String officeSought;

    public CandidateSearch withOfficeSought(String officeSought) {
        this.officeSought = officeSought;
        return this;
    }
    
    public CandidateSearch(){}
}
