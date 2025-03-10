/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BackTestConfiguration - Settings for backtest mode.
 */
public class BackTestConfiguration {
    @JsonProperty("RunBackTestMode")
    public Boolean runBackTestMode;

    public BackTestConfiguration withRunBackTestMode(Boolean runBackTestMode) {
        this.runBackTestMode = runBackTestMode;
        return this;
    }
    
    public BackTestConfiguration(@JsonProperty("RunBackTestMode") Boolean runBackTestMode) {
        this.runBackTestMode = runBackTestMode;
  }
}
