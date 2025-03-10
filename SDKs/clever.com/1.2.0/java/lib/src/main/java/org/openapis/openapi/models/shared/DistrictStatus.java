/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class DistrictStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;

    public DistrictStatus withError(String error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public DistrictStatus withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instant_login")
    public Boolean instantLogin;

    public DistrictStatus withInstantLogin(Boolean instantLogin) {
        this.instantLogin = instantLogin;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_sync")
    public String lastSync;

    public DistrictStatus withLastSync(String lastSync) {
        this.lastSync = lastSync;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launch_date")
    public String launchDate;

    public DistrictStatus withLaunchDate(String launchDate) {
        this.launchDate = launchDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pause_end")
    public String pauseEnd;

    public DistrictStatus withPauseEnd(String pauseEnd) {
        this.pauseEnd = pauseEnd;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pause_start")
    public String pauseStart;

    public DistrictStatus withPauseStart(String pauseStart) {
        this.pauseStart = pauseStart;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sis_type")
    public String sisType;

    public DistrictStatus withSisType(String sisType) {
        this.sisType = sisType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public DistrictStatusStateEnum state;

    public DistrictStatus withState(DistrictStatusStateEnum state) {
        this.state = state;
        return this;
    }
    
    public DistrictStatus(){}
}
