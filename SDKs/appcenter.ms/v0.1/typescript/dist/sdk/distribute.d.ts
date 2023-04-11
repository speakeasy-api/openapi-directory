import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Distribute {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch all apple test flight groups
     */
    appleMappingTestFlightGroups(req: operations.AppleMappingTestFlightGroupsRequest, security: operations.AppleMappingTestFlightGroupsSecurity, config?: AxiosRequestConfig): Promise<operations.AppleMappingTestFlightGroupsResponse>;
    /**
     * Create a mapping for an existing app in apple store for the specified application.
     */
    appleMappingCreate(req: operations.AppleMappingCreateRequest, security: operations.AppleMappingCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AppleMappingCreateResponse>;
    /**
     * Delete mapping of apple app to an existing app in apple store.
     */
    appleMappingDelete(req: operations.AppleMappingDeleteRequest, security: operations.AppleMappingDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppleMappingDeleteResponse>;
    /**
     * Get mapping of apple app to an existing app in apple store.
     */
    appleMappingGet(req: operations.AppleMappingGetRequest, security: operations.AppleMappingGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppleMappingGetResponse>;
    /**
     * Returns the device details.
     */
    devicesDeviceDetails(req: operations.DevicesDeviceDetailsRequest, security: operations.DevicesDeviceDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.DevicesDeviceDetailsResponse>;
    /**
     * Returns the resign status to the caller
     */
    devicesGetReleaseUpdateDevicesStatus(req: operations.DevicesGetReleaseUpdateDevicesStatusRequest, security: operations.DevicesGetReleaseUpdateDevicesStatusSecurity, config?: AxiosRequestConfig): Promise<operations.DevicesGetReleaseUpdateDevicesStatusResponse>;
    /**
     * Returns all devices associated with the given distribution group
     */
    devicesList(req: operations.DevicesListRequest, security: operations.DevicesListSecurity, config?: AxiosRequestConfig): Promise<operations.DevicesListResponse>;
    /**
     * Returns all devices associated with the given distribution group.
     */
    devicesListCsvFormat(req: operations.DevicesListCsvFormatRequest, security: operations.DevicesListCsvFormatSecurity, config?: AxiosRequestConfig): Promise<operations.DevicesListCsvFormatResponse>;
    /**
     * Registers a user for an existing device
     */
    devicesRegisterUserForDevice(req: operations.DevicesRegisterUserForDeviceRequest, security: operations.DevicesRegisterUserForDeviceSecurity, config?: AxiosRequestConfig): Promise<operations.DevicesRegisterUserForDeviceResponse>;
    /**
     * Removes an existing device from a user
     */
    devicesRemoveUserDevice(req: operations.DevicesRemoveUserDeviceRequest, security: operations.DevicesRemoveUserDeviceSecurity, config?: AxiosRequestConfig): Promise<operations.DevicesRemoveUserDeviceResponse>;
    /**
     * Returns all devices associated with the given user.
     */
    devicesUserDevicesList(config?: AxiosRequestConfig): Promise<operations.DevicesUserDevicesListResponse>;
    /**
     * Notify download(s) for the provided distribution release(s).
     */
    distibutionReleasesInstallAnalytics(req: operations.DistibutionReleasesInstallAnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.DistibutionReleasesInstallAnalyticsResponse>;
    /**
     * Return information about the provisioning profile. Only available for iOS.
     */
    provisioningProfile(req: operations.ProvisioningProfileRequest, security: operations.ProvisioningProfileSecurity, config?: AxiosRequestConfig): Promise<operations.ProvisioningProfileResponse>;
    /**
     * Distributes a release to a group
     */
    releasesAddDistributionGroup(req: operations.ReleasesAddDistributionGroupRequest, security: operations.ReleasesAddDistributionGroupSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesAddDistributionGroupResponse>;
    /**
     * Distributes a release to a store
     */
    releasesAddStore(req: operations.ReleasesAddStoreRequest, security: operations.ReleasesAddStoreSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesAddStoreResponse>;
    /**
     * Distributes a release to a user
     */
    releasesAddTesters(req: operations.ReleasesAddTestersRequest, security: operations.ReleasesAddTestersSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesAddTestersResponse>;
    /**
     * Return detailed information about releases avaiable to a tester.
     */
    releasesAvailableToTester(req: operations.ReleasesAvailableToTesterRequest, security: operations.ReleasesAvailableToTesterSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesAvailableToTesterResponse>;
    /**
     * Initiate a new release upload. This API is part of multi-step upload process.
     */
    releasesCreateReleaseUpload(req: operations.ReleasesCreateReleaseUploadRequest, security: operations.ReleasesCreateReleaseUploadSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesCreateReleaseUploadResponse>;
    /**
     * Deletes a release.
     */
    releasesDelete(req: operations.ReleasesDeleteRequest, security: operations.ReleasesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesDeleteResponse>;
    /**
     * Delete the given distribution group from the release
     */
    releasesDeleteDistributionGroup(req: operations.ReleasesDeleteDistributionGroupRequest, security: operations.ReleasesDeleteDistributionGroupSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesDeleteDistributionGroupResponse>;
    /**
     * Delete the given distribution store from the release
     */
    releasesDeleteDistributionStore(req: operations.ReleasesDeleteDistributionStoreRequest, security: operations.ReleasesDeleteDistributionStoreSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesDeleteDistributionStoreResponse>;
    /**
     * Delete the given tester from the release
     */
    releasesDeleteDistributionTester(req: operations.ReleasesDeleteDistributionTesterRequest, security: operations.ReleasesDeleteDistributionTesterSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesDeleteDistributionTesterResponse>;
    /**
     * Delete the given tester from the all releases
     */
    releasesDeleteTesterFromDestinations(req: operations.ReleasesDeleteTesterFromDestinationsRequest, security: operations.ReleasesDeleteTesterFromDestinationsSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesDeleteTesterFromDestinationsResponse>;
    /**
     * Deletes a release with id 'release_id' in a given distribution group.
     */
    releasesDeleteWithDistributionGroupId(req: operations.ReleasesDeleteWithDistributionGroupIdRequest, security: operations.ReleasesDeleteWithDistributionGroupIdSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesDeleteWithDistributionGroupIdResponse>;
    /**
     * Returns the manifest.plist in XML format for installing the release on a device. Only available for iOS.
     */
    releasesGetIosManifest(req: operations.ReleasesGetIosManifestRequest, config?: AxiosRequestConfig): Promise<operations.ReleasesGetIosManifestResponse>;
    /**
     * Return detailed information about a distributed release in a given distribution group.
     */
    releasesGetLatestByDistributionGroup(req: operations.ReleasesGetLatestByDistributionGroupRequest, security: operations.ReleasesGetLatestByDistributionGroupSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesGetLatestByDistributionGroupResponse>;
    /**
     * If 'latest' is not specified then it will return the specified release if it's enabled. If 'latest' is specified, regardless of whether a release hash is provided, the latest enabled release is returned.
     */
    releasesGetLatestByHash(req: operations.ReleasesGetLatestByHashRequest, security: operations.ReleasesGetLatestByHashSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesGetLatestByHashResponse>;
    /**
     * Get a release with 'latest' for the given public group.
     */
    releasesGetLatestByPublicDistributionGroup(req: operations.ReleasesGetLatestByPublicDistributionGroupRequest, config?: AxiosRequestConfig): Promise<operations.ReleasesGetLatestByPublicDistributionGroupResponse>;
    /**
     * Get a release with id `release_id`. If `release_id` is `latest`, return the latest release that was distributed to the current user (from all the distribution groups).
     */
    releasesGetLatestByUser(req: operations.ReleasesGetLatestByUserRequest, security: operations.ReleasesGetLatestByUserSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesGetLatestByUserResponse>;
    /**
     * Get the latest release distributed to a private group the given user is a member of for the given app.
     */
    releasesGetLatestPrivateRelease(req: operations.ReleasesGetLatestPrivateReleaseRequest, security: operations.ReleasesGetLatestPrivateReleaseSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesGetLatestPrivateReleaseResponse>;
    /**
     * Get the latest public release for the given app.
     */
    releasesGetLatestPublicRelease(req: operations.ReleasesGetLatestPublicReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReleasesGetLatestPublicReleaseResponse>;
    /**
     * Get all public distribution groups that a given release has been distributed to
     */
    releasesGetPublicGroupsForReleaseByHash(req: operations.ReleasesGetPublicGroupsForReleaseByHashRequest, config?: AxiosRequestConfig): Promise<operations.ReleasesGetPublicGroupsForReleaseByHashResponse>;
    /**
     * Get the current status of the release upload.
     */
    releasesGetReleaseUploadStatus(req: operations.ReleasesGetReleaseUploadStatusRequest, security: operations.ReleasesGetReleaseUploadStatusSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesGetReleaseUploadStatusResponse>;
    /**
     * Gets the sparkle feed of the releases that are distributed to all the public distribution groups.
     */
    releasesGetSparkleFeed(req: operations.ReleasesGetSparkleFeedRequest, config?: AxiosRequestConfig): Promise<operations.ReleasesGetSparkleFeedResponse>;
    /**
     * Return basic information about releases.
     */
    releasesList(req: operations.ReleasesListRequest, security: operations.ReleasesListSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesListResponse>;
    /**
     * Return basic information about distributed releases in a given distribution group.
     */
    releasesListByDistributionGroup(req: operations.ReleasesListByDistributionGroupRequest, security: operations.ReleasesListByDistributionGroupSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesListByDistributionGroupResponse>;
    /**
     * Get the latest release from every distribution group associated with an application.
     */
    releasesListLatest(req: operations.ReleasesListLatestRequest, security: operations.ReleasesListLatestSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesListLatestResponse>;
    /**
     * Update details about the specified distribution group associated with the release
     */
    releasesPutDistributionGroup(req: operations.ReleasesPutDistributionGroupRequest, security: operations.ReleasesPutDistributionGroupSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesPutDistributionGroupResponse>;
    /**
     * Update details about the specified tester associated with the release
     */
    releasesPutDistributionTester(req: operations.ReleasesPutDistributionTesterRequest, security: operations.ReleasesPutDistributionTesterSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesPutDistributionTesterResponse>;
    /**
     * Updates a release.
     */
    releasesUpdate(req: operations.ReleasesUpdateRequest, security: operations.ReleasesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesUpdateResponse>;
    /**
     * Update details of a release.
     */
    releasesUpdateDetails(req: operations.ReleasesUpdateDetailsRequest, security: operations.ReleasesUpdateDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesUpdateDetailsResponse>;
    /**
     * Update the current status of the release upload.
     */
    releasesUpdateReleaseUploadStatus(req: operations.ReleasesUpdateReleaseUploadStatusRequest, security: operations.ReleasesUpdateReleaseUploadStatusSecurity, config?: AxiosRequestConfig): Promise<operations.ReleasesUpdateReleaseUploadStatusResponse>;
    /**
     * Application specific store service status
     */
    storeNotificationsGetNotificationByAppId(req: operations.StoreNotificationsGetNotificationByAppIdRequest, security: operations.StoreNotificationsGetNotificationByAppIdSecurity, config?: AxiosRequestConfig): Promise<operations.StoreNotificationsGetNotificationByAppIdResponse>;
    /**
     * Returns publish logs for a particular release published to a particular store
     */
    storeReleasePublishLogsGet(req: operations.StoreReleasePublishLogsGetRequest, security: operations.StoreReleasePublishLogsGetSecurity, config?: AxiosRequestConfig): Promise<operations.StoreReleasePublishLogsGetResponse>;
    /**
     * delete the release with release Id
     */
    storeReleasesDelete(req: operations.StoreReleasesDeleteRequest, security: operations.StoreReleasesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.StoreReleasesDeleteResponse>;
    /**
     * Return releases published in a store for releaseId and storeId
     */
    storeReleasesGet(req: operations.StoreReleasesGetRequest, security: operations.StoreReleasesGetSecurity, config?: AxiosRequestConfig): Promise<operations.StoreReleasesGetResponse>;
    /**
     * Returns the latest release published in a store.
     */
    storeReleasesGetLatest(req: operations.StoreReleasesGetLatestRequest, security: operations.StoreReleasesGetLatestSecurity, config?: AxiosRequestConfig): Promise<operations.StoreReleasesGetLatestResponse>;
    /**
     * Return the Error Details of release which failed in publishing.
     */
    storeReleasesGetPublishError(req: operations.StoreReleasesGetPublishErrorRequest, security: operations.StoreReleasesGetPublishErrorSecurity, config?: AxiosRequestConfig): Promise<operations.StoreReleasesGetPublishErrorResponse>;
    /**
     * Return the Real time Status publishing of release from store.
     */
    storeReleasesGetRealTimeStatusByReleaseId(req: operations.StoreReleasesGetRealTimeStatusByReleaseIdRequest, security: operations.StoreReleasesGetRealTimeStatusByReleaseIdSecurity, config?: AxiosRequestConfig): Promise<operations.StoreReleasesGetRealTimeStatusByReleaseIdResponse>;
    /**
     * Return all releases published  in a store
     */
    storeReleasesList(req: operations.StoreReleasesListRequest, security: operations.StoreReleasesListSecurity, config?: AxiosRequestConfig): Promise<operations.StoreReleasesListResponse>;
    /**
     * Create a new external store for the specified application.
     */
    storesCreate(req: operations.StoresCreateRequest, security: operations.StoresCreateSecurity, config?: AxiosRequestConfig): Promise<operations.StoresCreateResponse>;
    /**
     * delete the store based on specific store name.
     */
    storesDelete(req: operations.StoresDeleteRequest, security: operations.StoresDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.StoresDeleteResponse>;
    /**
     * Return the store details for specified store name.
     */
    storesGet(req: operations.StoresGetRequest, security: operations.StoresGetSecurity, config?: AxiosRequestConfig): Promise<operations.StoresGetResponse>;
    /**
     * Get all the store details from Storage store table for a particular application.
     */
    storesList(req: operations.StoresListRequest, security: operations.StoresListSecurity, config?: AxiosRequestConfig): Promise<operations.StoresListResponse>;
    /**
     * Update the store.
     */
    storesPatch(req: operations.StoresPatchRequest, security: operations.StoresPatchSecurity, config?: AxiosRequestConfig): Promise<operations.StoresPatchResponse>;
}
