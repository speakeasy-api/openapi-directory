package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkGroupConfigurationUpdates
 * The configuration information that will be updated for this workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, whether the workgroup settings override the client-side settings, and the data usage limit for the amount of bytes scanned per query, if it is specified.
**/
public class WorkGroupConfigurationUpdates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BytesScannedCutoffPerQuery")
    public Long bytesScannedCutoffPerQuery;
    public WorkGroupConfigurationUpdates withBytesScannedCutoffPerQuery(Long bytesScannedCutoffPerQuery) {
        this.bytesScannedCutoffPerQuery = bytesScannedCutoffPerQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnforceWorkGroupConfiguration")
    public Boolean enforceWorkGroupConfiguration;
    public WorkGroupConfigurationUpdates withEnforceWorkGroupConfiguration(Boolean enforceWorkGroupConfiguration) {
        this.enforceWorkGroupConfiguration = enforceWorkGroupConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineVersion")
    public EngineVersion engineVersion;
    public WorkGroupConfigurationUpdates withEngineVersion(EngineVersion engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublishCloudWatchMetricsEnabled")
    public Boolean publishCloudWatchMetricsEnabled;
    public WorkGroupConfigurationUpdates withPublishCloudWatchMetricsEnabled(Boolean publishCloudWatchMetricsEnabled) {
        this.publishCloudWatchMetricsEnabled = publishCloudWatchMetricsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoveBytesScannedCutoffPerQuery")
    public Boolean removeBytesScannedCutoffPerQuery;
    public WorkGroupConfigurationUpdates withRemoveBytesScannedCutoffPerQuery(Boolean removeBytesScannedCutoffPerQuery) {
        this.removeBytesScannedCutoffPerQuery = removeBytesScannedCutoffPerQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequesterPaysEnabled")
    public Boolean requesterPaysEnabled;
    public WorkGroupConfigurationUpdates withRequesterPaysEnabled(Boolean requesterPaysEnabled) {
        this.requesterPaysEnabled = requesterPaysEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResultConfigurationUpdates")
    public ResultConfigurationUpdates resultConfigurationUpdates;
    public WorkGroupConfigurationUpdates withResultConfigurationUpdates(ResultConfigurationUpdates resultConfigurationUpdates) {
        this.resultConfigurationUpdates = resultConfigurationUpdates;
        return this;
    }
}