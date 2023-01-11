package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IntegrationLinkDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public ConfigModel config;
    public IntegrationLinkDetail withConfig(ConfigModel config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public EnvironmentModel environment;
    public IntegrationLinkDetail withEnvironment(EnvironmentModel environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public ProductModel product;
    public IntegrationLinkDetail withProduct(ProductModel product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readOnly")
    public Boolean readOnly;
    public IntegrationLinkDetail withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setting")
    public SettingDataModel setting;
    public IntegrationLinkDetail withSetting(SettingDataModel setting) {
        this.setting = setting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public IntegrationLinkDetail withStatus(String status) {
        this.status = status;
        return this;
    }
}