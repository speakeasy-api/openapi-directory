package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkGroupConfiguration
 * The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. 
**/
public class WorkGroupConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BytesScannedCutoffPerQuery")
    public Long bytesScannedCutoffPerQuery;
    public WorkGroupConfiguration withBytesScannedCutoffPerQuery(Long bytesScannedCutoffPerQuery) {
        this.bytesScannedCutoffPerQuery = bytesScannedCutoffPerQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnforceWorkGroupConfiguration")
    public Boolean enforceWorkGroupConfiguration;
    public WorkGroupConfiguration withEnforceWorkGroupConfiguration(Boolean enforceWorkGroupConfiguration) {
        this.enforceWorkGroupConfiguration = enforceWorkGroupConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineVersion")
    public EngineVersion engineVersion;
    public WorkGroupConfiguration withEngineVersion(EngineVersion engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublishCloudWatchMetricsEnabled")
    public Boolean publishCloudWatchMetricsEnabled;
    public WorkGroupConfiguration withPublishCloudWatchMetricsEnabled(Boolean publishCloudWatchMetricsEnabled) {
        this.publishCloudWatchMetricsEnabled = publishCloudWatchMetricsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequesterPaysEnabled")
    public Boolean requesterPaysEnabled;
    public WorkGroupConfiguration withRequesterPaysEnabled(Boolean requesterPaysEnabled) {
        this.requesterPaysEnabled = requesterPaysEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResultConfiguration")
    public ResultConfiguration resultConfiguration;
    public WorkGroupConfiguration withResultConfiguration(ResultConfiguration resultConfiguration) {
        this.resultConfiguration = resultConfiguration;
        return this;
    }
}