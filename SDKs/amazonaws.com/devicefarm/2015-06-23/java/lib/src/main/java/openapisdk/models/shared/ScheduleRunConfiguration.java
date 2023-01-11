package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScheduleRunConfiguration
 * Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.
**/
public class ScheduleRunConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auxiliaryApps")
    public String[] auxiliaryApps;
    public ScheduleRunConfiguration withAuxiliaryApps(String[] auxiliaryApps) {
        this.auxiliaryApps = auxiliaryApps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingMethod")
    public BillingMethodEnum billingMethod;
    public ScheduleRunConfiguration withBillingMethod(BillingMethodEnum billingMethod) {
        this.billingMethod = billingMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerArtifactPaths")
    public CustomerArtifactPaths customerArtifactPaths;
    public ScheduleRunConfiguration withCustomerArtifactPaths(CustomerArtifactPaths customerArtifactPaths) {
        this.customerArtifactPaths = customerArtifactPaths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extraDataPackageArn")
    public String extraDataPackageArn;
    public ScheduleRunConfiguration withExtraDataPackageArn(String extraDataPackageArn) {
        this.extraDataPackageArn = extraDataPackageArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public ScheduleRunConfiguration withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public ScheduleRunConfiguration withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkProfileArn")
    public String networkProfileArn;
    public ScheduleRunConfiguration withNetworkProfileArn(String networkProfileArn) {
        this.networkProfileArn = networkProfileArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radios")
    public Radios radios;
    public ScheduleRunConfiguration withRadios(Radios radios) {
        this.radios = radios;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpceConfigurationArns")
    public String[] vpceConfigurationArns;
    public ScheduleRunConfiguration withVpceConfigurationArns(String[] vpceConfigurationArns) {
        this.vpceConfigurationArns = vpceConfigurationArns;
        return this;
    }
}