package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("historic_urls")
    public String[] historicUrls;
    public Onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema withHistoricUrls(String[] historicUrls) {
        this.historicUrls = historicUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("live_url")
    public String liveUrl;
    public Onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema withLiveUrl(String liveUrl) {
        this.liveUrl = liveUrl;
        return this;
    }
}