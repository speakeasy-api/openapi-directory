/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StoreReleasesGet200ApplicationJSON - Details of an uploaded release
 */
public class StoreReleasesGet200ApplicationJSON {
    /**
     * The release's minimum required Android API level.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("android_min_api_level")
    public String androidMinApiLevel;

    public StoreReleasesGet200ApplicationJSON withAndroidMinApiLevel(String androidMinApiLevel) {
        this.androidMinApiLevel = androidMinApiLevel;
        return this;
    }
    
    /**
     * The app's display name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app_display_name")
    public String appDisplayName;

    public StoreReleasesGet200ApplicationJSON withAppDisplayName(String appDisplayName) {
        this.appDisplayName = appDisplayName;
        return this;
    }
    
    /**
     * The app's name (extracted from the uploaded release).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app_name")
    public String appName;

    public StoreReleasesGet200ApplicationJSON withAppName(String appName) {
        this.appName = appName;
        return this;
    }
    
    /**
     * The identifier of the apps bundle.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundle_identifier")
    public String bundleIdentifier;

    public StoreReleasesGet200ApplicationJSON withBundleIdentifier(String bundleIdentifier) {
        this.bundleIdentifier = bundleIdentifier;
        return this;
    }
    
    /**
     * a list of distribution stores that are associated with this release.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distribution_stores")
    public StoreReleasesGet200ApplicationJSONDistributionStores[] distributionStores;

    public StoreReleasesGet200ApplicationJSON withDistributionStores(StoreReleasesGet200ApplicationJSONDistributionStores[] distributionStores) {
        this.distributionStores = distributionStores;
        return this;
    }
    
    /**
     * The URL that hosts the binary for this release.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;

    public StoreReleasesGet200ApplicationJSON withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    
    /**
     * MD5 checksum of the release binary.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;

    public StoreReleasesGet200ApplicationJSON withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    
    /**
     * ID identifying this unique release.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Double id;

    public StoreReleasesGet200ApplicationJSON withId(Double id) {
        this.id = id;
        return this;
    }
    
    /**
     * The href required to install a release on a mobile device. On iOS devices will be prefixed with `itms-services://?action=download-manifest&amp;url=`
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("install_url")
    public StoreReleasesGet200ApplicationJSONInstallUrlEnum installUrl;

    public StoreReleasesGet200ApplicationJSON withInstallUrl(StoreReleasesGet200ApplicationJSONInstallUrlEnum installUrl) {
        this.installUrl = installUrl;
        return this;
    }
    
    /**
     * The release's minimum required operating system.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min_os")
    public String minOs;

    public StoreReleasesGet200ApplicationJSON withMinOs(String minOs) {
        this.minOs = minOs;
        return this;
    }
    
    /**
     * The release's release notes.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_notes")
    public String releaseNotes;

    public StoreReleasesGet200ApplicationJSON withReleaseNotes(String releaseNotes) {
        this.releaseNotes = releaseNotes;
        return this;
    }
    
    /**
     * The release's short version.&lt;br&gt;
     * For iOS: CFBundleShortVersionString from info.plist.
     * For Android: android:versionName from AppManifest.xml.
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("short_version")
    public String shortVersion;

    public StoreReleasesGet200ApplicationJSON withShortVersion(String shortVersion) {
        this.shortVersion = shortVersion;
        return this;
    }
    
    /**
     * The release's size in bytes.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Double size;

    public StoreReleasesGet200ApplicationJSON withSize(Double size) {
        this.size = size;
        return this;
    }
    
    /**
     * OBSOLETE. Will be removed in next version. The availability concept is now replaced with distributed. Any 'available' release will be associated with the default distribution group of an app.&lt;/br&gt;
     * The release state.&lt;br&gt;
     * &lt;b&gt;available&lt;/b&gt;: The uploaded release has been distributed.&lt;br&gt;
     * &lt;b&gt;unavailable&lt;/b&gt;: The uploaded release is not visible to the user. &lt;br&gt;
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public StoreReleasesGet200ApplicationJSONStatusEnum status;

    public StoreReleasesGet200ApplicationJSON withStatus(StoreReleasesGet200ApplicationJSONStatusEnum status) {
        this.status = status;
        return this;
    }
    
    /**
     * UTC time in ISO 8601 format of the uploaded time.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploaded_at")
    public String uploadedAt;

    public StoreReleasesGet200ApplicationJSON withUploadedAt(String uploadedAt) {
        this.uploadedAt = uploadedAt;
        return this;
    }
    
    /**
     * The release's version.&lt;br&gt;
     * For iOS: CFBundleVersion from info.plist.
     * For Android: android:versionCode from AppManifest.xml.
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;

    public StoreReleasesGet200ApplicationJSON withVersion(String version) {
        this.version = version;
        return this;
    }
    
    public StoreReleasesGet200ApplicationJSON(){}
}
