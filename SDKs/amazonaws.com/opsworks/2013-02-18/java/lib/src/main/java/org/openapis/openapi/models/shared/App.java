/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * App - A description of the app.
 */
public class App {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppId")
    public String appId;

    public App withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppSource")
    public Source appSource;

    public App withAppSource(Source appSource) {
        this.appSource = appSource;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public java.util.Map<String, String> attributes;

    public App withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedAt")
    public String createdAt;

    public App withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSources")
    public DataSource[] dataSources;

    public App withDataSources(DataSource[] dataSources) {
        this.dataSources = dataSources;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;

    public App withDescription(String description) {
        this.description = description;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domains")
    public String[] domains;

    public App withDomains(String[] domains) {
        this.domains = domains;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableSsl")
    public Boolean enableSsl;

    public App withEnableSsl(Boolean enableSsl) {
        this.enableSsl = enableSsl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Environment")
    public EnvironmentVariable[] environment;

    public App withEnvironment(EnvironmentVariable[] environment) {
        this.environment = environment;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;

    public App withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Shortname")
    public String shortname;

    public App withShortname(String shortname) {
        this.shortname = shortname;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SslConfiguration")
    public SslConfiguration sslConfiguration;

    public App withSslConfiguration(SslConfiguration sslConfiguration) {
        this.sslConfiguration = sslConfiguration;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackId")
    public String stackId;

    public App withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public AppTypeEnum type;

    public App withType(AppTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public App(){}
}
