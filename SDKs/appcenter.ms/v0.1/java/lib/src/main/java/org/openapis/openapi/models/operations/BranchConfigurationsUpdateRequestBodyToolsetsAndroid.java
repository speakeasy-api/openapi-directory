/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BranchConfigurationsUpdateRequestBodyToolsetsAndroid - Build configuration for Android projects
 */
public class BranchConfigurationsUpdateRequestBodyToolsetsAndroid {
    /**
     * Whether to apply automatic signing or not
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automaticSigning")
    public Boolean automaticSigning;

    public BranchConfigurationsUpdateRequestBodyToolsetsAndroid withAutomaticSigning(Boolean automaticSigning) {
        this.automaticSigning = automaticSigning;
        return this;
    }
    
    /**
     * The Android build variant to build
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildVariant")
    public String buildVariant;

    public BranchConfigurationsUpdateRequestBodyToolsetsAndroid withBuildVariant(String buildVariant) {
        this.buildVariant = buildVariant;
        return this;
    }
    
    /**
     * Path to the Gradle wrapper script
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradleWrapperPath")
    public String gradleWrapperPath;

    public BranchConfigurationsUpdateRequestBodyToolsetsAndroid withGradleWrapperPath(String gradleWrapperPath) {
        this.gradleWrapperPath = gradleWrapperPath;
        return this;
    }
    
    /**
     * Whether it is the root module or not
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isRoot")
    public Boolean isRoot;

    public BranchConfigurationsUpdateRequestBodyToolsetsAndroid withIsRoot(Boolean isRoot) {
        this.isRoot = isRoot;
        return this;
    }
    
    /**
     * The key alias
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyAlias")
    public String keyAlias;

    public BranchConfigurationsUpdateRequestBodyToolsetsAndroid withKeyAlias(String keyAlias) {
        this.keyAlias = keyAlias;
        return this;
    }
    
    /**
     * The key password
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPassword")
    public String keyPassword;

    public BranchConfigurationsUpdateRequestBodyToolsetsAndroid withKeyPassword(String keyPassword) {
        this.keyPassword = keyPassword;
        return this;
    }
    
    /**
     * The keystore encoded value
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keystoreEncoded")
    public String keystoreEncoded;

    public BranchConfigurationsUpdateRequestBodyToolsetsAndroid withKeystoreEncoded(String keystoreEncoded) {
        this.keystoreEncoded = keystoreEncoded;
        return this;
    }
    
    /**
     * The name of the keystore file
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keystoreFilename")
    public String keystoreFilename;

    public BranchConfigurationsUpdateRequestBodyToolsetsAndroid withKeystoreFilename(String keystoreFilename) {
        this.keystoreFilename = keystoreFilename;
        return this;
    }
    
    /**
     * The password of the keystore
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keystorePassword")
    public String keystorePassword;

    public BranchConfigurationsUpdateRequestBodyToolsetsAndroid withKeystorePassword(String keystorePassword) {
        this.keystorePassword = keystorePassword;
        return this;
    }
    
    /**
     * The Gradle module to build
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("module")
    public String module;

    public BranchConfigurationsUpdateRequestBodyToolsetsAndroid withModule(String module) {
        this.module = module;
        return this;
    }
    
    /**
     * Whether to run lint checks during the build (default)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runLint")
    public Boolean runLint;

    public BranchConfigurationsUpdateRequestBodyToolsetsAndroid withRunLint(Boolean runLint) {
        this.runLint = runLint;
        return this;
    }
    
    /**
     * Whether to run unit tests during the build (default)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runTests")
    public Boolean runTests;

    public BranchConfigurationsUpdateRequestBodyToolsetsAndroid withRunTests(Boolean runTests) {
        this.runTests = runTests;
        return this;
    }
    
    public BranchConfigurationsUpdateRequestBodyToolsetsAndroid(){}
}
