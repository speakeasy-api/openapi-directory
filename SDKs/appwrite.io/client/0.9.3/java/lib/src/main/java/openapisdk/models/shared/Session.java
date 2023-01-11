package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Session
 * Session
**/
public class Session {
    @JsonProperty("$id")
    public String dollarId;
    public Session withDollarId(String dollarId) {
        this.dollarId = dollarId;
        return this;
    }
    @JsonProperty("clientCode")
    public String clientCode;
    public Session withClientCode(String clientCode) {
        this.clientCode = clientCode;
        return this;
    }
    @JsonProperty("clientEngine")
    public String clientEngine;
    public Session withClientEngine(String clientEngine) {
        this.clientEngine = clientEngine;
        return this;
    }
    @JsonProperty("clientEngineVersion")
    public String clientEngineVersion;
    public Session withClientEngineVersion(String clientEngineVersion) {
        this.clientEngineVersion = clientEngineVersion;
        return this;
    }
    @JsonProperty("clientName")
    public String clientName;
    public Session withClientName(String clientName) {
        this.clientName = clientName;
        return this;
    }
    @JsonProperty("clientType")
    public String clientType;
    public Session withClientType(String clientType) {
        this.clientType = clientType;
        return this;
    }
    @JsonProperty("clientVersion")
    public String clientVersion;
    public Session withClientVersion(String clientVersion) {
        this.clientVersion = clientVersion;
        return this;
    }
    @JsonProperty("countryCode")
    public String countryCode;
    public Session withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("countryName")
    public String countryName;
    public Session withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonProperty("current")
    public Boolean current;
    public Session withCurrent(Boolean current) {
        this.current = current;
        return this;
    }
    @JsonProperty("deviceBrand")
    public String deviceBrand;
    public Session withDeviceBrand(String deviceBrand) {
        this.deviceBrand = deviceBrand;
        return this;
    }
    @JsonProperty("deviceModel")
    public String deviceModel;
    public Session withDeviceModel(String deviceModel) {
        this.deviceModel = deviceModel;
        return this;
    }
    @JsonProperty("deviceName")
    public String deviceName;
    public Session withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonProperty("expire")
    public Integer expire;
    public Session withExpire(Integer expire) {
        this.expire = expire;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public Session withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("osCode")
    public String osCode;
    public Session withOsCode(String osCode) {
        this.osCode = osCode;
        return this;
    }
    @JsonProperty("osName")
    public String osName;
    public Session withOsName(String osName) {
        this.osName = osName;
        return this;
    }
    @JsonProperty("osVersion")
    public String osVersion;
    public Session withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonProperty("provider")
    public String provider;
    public Session withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @JsonProperty("providerToken")
    public String providerToken;
    public Session withProviderToken(String providerToken) {
        this.providerToken = providerToken;
        return this;
    }
    @JsonProperty("providerUid")
    public String providerUid;
    public Session withProviderUid(String providerUid) {
        this.providerUid = providerUid;
        return this;
    }
    @JsonProperty("userId")
    public String userId;
    public Session withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}