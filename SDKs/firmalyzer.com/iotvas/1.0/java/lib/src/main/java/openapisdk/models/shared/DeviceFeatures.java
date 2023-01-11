package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeviceFeatures {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ftp_banner")
    public String ftpBanner;
    public DeviceFeatures withFtpBanner(String ftpBanner) {
        this.ftpBanner = ftpBanner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public DeviceFeatures withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_response")
    public String httpResponse;
    public DeviceFeatures withHttpResponse(String httpResponse) {
        this.httpResponse = httpResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("https_response")
    public String httpsResponse;
    public DeviceFeatures withHttpsResponse(String httpsResponse) {
        this.httpsResponse = httpsResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nic_mac")
    public String nicMac;
    public DeviceFeatures withNicMac(String nicMac) {
        this.nicMac = nicMac;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snmp_sysdescr")
    public String snmpSysdescr;
    public DeviceFeatures withSnmpSysdescr(String snmpSysdescr) {
        this.snmpSysdescr = snmpSysdescr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snmp_sysoid")
    public String snmpSysoid;
    public DeviceFeatures withSnmpSysoid(String snmpSysoid) {
        this.snmpSysoid = snmpSysoid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telnet_banner")
    public String telnetBanner;
    public DeviceFeatures withTelnetBanner(String telnetBanner) {
        this.telnetBanner = telnetBanner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upnp_response")
    public String upnpResponse;
    public DeviceFeatures withUpnpResponse(String upnpResponse) {
        this.upnpResponse = upnpResponse;
        return this;
    }
}