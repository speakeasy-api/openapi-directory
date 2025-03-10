/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Client - Metadata gathered about the client
 */
public class Client {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app_name")
    public String appName;

    public Client withAppName(String appName) {
        this.appName = appName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app_version")
    public String appVersion;

    public Client withAppVersion(String appVersion) {
        this.appVersion = appVersion;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address")
    public String ipAddress;

    public Client withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os_name")
    public String osName;

    public Client withOsName(String osName) {
        this.osName = osName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os_version")
    public String osVersion;

    public Client withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform_name")
    public String platformName;

    public Client withPlatformName(String platformName) {
        this.platformName = platformName;
        return this;
    }
    
    /**
     * Depending on the platform used, this can be the version of the browser that the client extension is installed, the model of computer that the native application is installed or the machine's CPU version that the CLI was installed
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform_version")
    public String platformVersion;

    public Client withPlatformVersion(String platformVersion) {
        this.platformVersion = platformVersion;
        return this;
    }
    
    public Client(){}
}
