package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobWorkerExecutorConfiguration
 * Details about the polling configuration for the <code>JobWorker</code> action engine, or executor.
**/
public class JobWorkerExecutorConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pollingAccounts")
    public String[] pollingAccounts;
    public JobWorkerExecutorConfiguration withPollingAccounts(String[] pollingAccounts) {
        this.pollingAccounts = pollingAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pollingServicePrincipals")
    public String[] pollingServicePrincipals;
    public JobWorkerExecutorConfiguration withPollingServicePrincipals(String[] pollingServicePrincipals) {
        this.pollingServicePrincipals = pollingServicePrincipals;
        return this;
    }
}