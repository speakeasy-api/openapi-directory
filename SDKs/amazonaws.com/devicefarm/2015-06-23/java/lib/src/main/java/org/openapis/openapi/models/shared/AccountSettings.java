/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AccountSettings - A container for account-level settings in AWS Device Farm.
 */
public class AccountSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsAccountNumber")
    public String awsAccountNumber;

    public AccountSettings withAwsAccountNumber(String awsAccountNumber) {
        this.awsAccountNumber = awsAccountNumber;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultJobTimeoutMinutes")
    public Long defaultJobTimeoutMinutes;

    public AccountSettings withDefaultJobTimeoutMinutes(Long defaultJobTimeoutMinutes) {
        this.defaultJobTimeoutMinutes = defaultJobTimeoutMinutes;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxJobTimeoutMinutes")
    public Long maxJobTimeoutMinutes;

    public AccountSettings withMaxJobTimeoutMinutes(Long maxJobTimeoutMinutes) {
        this.maxJobTimeoutMinutes = maxJobTimeoutMinutes;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSlots")
    public java.util.Map<String, Long> maxSlots;

    public AccountSettings withMaxSlots(java.util.Map<String, Long> maxSlots) {
        this.maxSlots = maxSlots;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipAppResign")
    public Boolean skipAppResign;

    public AccountSettings withSkipAppResign(Boolean skipAppResign) {
        this.skipAppResign = skipAppResign;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trialMinutes")
    public TrialMinutes trialMinutes;

    public AccountSettings withTrialMinutes(TrialMinutes trialMinutes) {
        this.trialMinutes = trialMinutes;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unmeteredDevices")
    public java.util.Map<String, Long> unmeteredDevices;

    public AccountSettings withUnmeteredDevices(java.util.Map<String, Long> unmeteredDevices) {
        this.unmeteredDevices = unmeteredDevices;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unmeteredRemoteAccessDevices")
    public java.util.Map<String, Long> unmeteredRemoteAccessDevices;

    public AccountSettings withUnmeteredRemoteAccessDevices(java.util.Map<String, Long> unmeteredRemoteAccessDevices) {
        this.unmeteredRemoteAccessDevices = unmeteredRemoteAccessDevices;
        return this;
    }
    
    public AccountSettings(){}
}
