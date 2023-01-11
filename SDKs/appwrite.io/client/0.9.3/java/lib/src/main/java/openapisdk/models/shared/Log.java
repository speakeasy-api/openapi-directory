package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Log
 * Log
**/
public class Log {
    @JsonProperty("clientCode")
    public String clientCode;
    public Log withClientCode(String clientCode) {
        this.clientCode = clientCode;
        return this;
    }
    @JsonProperty("clientEngine")
    public String clientEngine;
    public Log withClientEngine(String clientEngine) {
        this.clientEngine = clientEngine;
        return this;
    }
    @JsonProperty("clientEngineVersion")
    public String clientEngineVersion;
    public Log withClientEngineVersion(String clientEngineVersion) {
        this.clientEngineVersion = clientEngineVersion;
        return this;
    }
    @JsonProperty("clientName")
    public String clientName;
    public Log withClientName(String clientName) {
        this.clientName = clientName;
        return this;
    }
    @JsonProperty("clientType")
    public String clientType;
    public Log withClientType(String clientType) {
        this.clientType = clientType;
        return this;
    }
    @JsonProperty("clientVersion")
    public String clientVersion;
    public Log withClientVersion(String clientVersion) {
        this.clientVersion = clientVersion;
        return this;
    }
    @JsonProperty("countryCode")
    public String countryCode;
    public Log withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("countryName")
    public String countryName;
    public Log withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonProperty("deviceBrand")
    public String deviceBrand;
    public Log withDeviceBrand(String deviceBrand) {
        this.deviceBrand = deviceBrand;
        return this;
    }
    @JsonProperty("deviceModel")
    public String deviceModel;
    public Log withDeviceModel(String deviceModel) {
        this.deviceModel = deviceModel;
        return this;
    }
    @JsonProperty("deviceName")
    public String deviceName;
    public Log withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonProperty("event")
    public String event;
    public Log withEvent(String event) {
        this.event = event;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public Log withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("osCode")
    public String osCode;
    public Log withOsCode(String osCode) {
        this.osCode = osCode;
        return this;
    }
    @JsonProperty("osName")
    public String osName;
    public Log withOsName(String osName) {
        this.osName = osName;
        return this;
    }
    @JsonProperty("osVersion")
    public String osVersion;
    public Log withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonProperty("time")
    public Integer time;
    public Log withTime(Integer time) {
        this.time = time;
        return this;
    }
}