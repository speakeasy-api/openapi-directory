import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Crash {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a specific group.
     */
    crashGroupsGet(req: operations.CrashGroupsGetRequest, security: operations.CrashGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CrashGroupsGetResponse>;
    /**
     * Gets a stacktrace for a specific crash.
     */
    crashGroupsGetStacktrace(req: operations.CrashGroupsGetStacktraceRequest, security: operations.CrashGroupsGetStacktraceSecurity, config?: AxiosRequestConfig): Promise<operations.CrashGroupsGetStacktraceResponse>;
    /**
     * Gets a list of crash groups and whether the list contains all available groups.
     */
    crashGroupsList(req: operations.CrashGroupsListRequest, security: operations.CrashGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.CrashGroupsListResponse>;
    /**
     * Updates a group.
     */
    crashGroupsUpdate(req: operations.CrashGroupsUpdateRequest, security: operations.CrashGroupsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CrashGroupsUpdateResponse>;
    /**
     * Delete a specific crash and related attachments and blobs for an app.
     */
    crashesDelete(req: operations.CrashesDeleteRequest, security: operations.CrashesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CrashesDeleteResponse>;
    /**
     * Gets a specific crash for an app.
     */
    crashesGet(req: operations.CrashesGetRequest, security: operations.CrashesGetSecurity, config?: AxiosRequestConfig): Promise<operations.CrashesGetResponse>;
    /**
     * Gets whether the application has any crashes.
     */
    crashesGetAppCrashesInfo(req: operations.CrashesGetAppCrashesInfoRequest, security: operations.CrashesGetAppCrashesInfoSecurity, config?: AxiosRequestConfig): Promise<operations.CrashesGetAppCrashesInfoResponse>;
    /**
     * Gets a list of application versions.
     */
    crashesGetAppVersions(req: operations.CrashesGetAppVersionsRequest, security: operations.CrashesGetAppVersionsSecurity, config?: AxiosRequestConfig): Promise<operations.CrashesGetAppVersionsResponse>;
    /**
     * Gets the URI location to download crash attachment.
     */
    crashesGetCrashAttachmentLocation(req: operations.CrashesGetCrashAttachmentLocationRequest, security: operations.CrashesGetCrashAttachmentLocationSecurity, config?: AxiosRequestConfig): Promise<operations.CrashesGetCrashAttachmentLocationResponse>;
    /**
     * Gets content of the text attachment.
     */
    crashesGetCrashTextAttachmentContent(req: operations.CrashesGetCrashTextAttachmentContentRequest, security: operations.CrashesGetCrashTextAttachmentContentSecurity, config?: AxiosRequestConfig): Promise<operations.CrashesGetCrashTextAttachmentContentResponse>;
    /**
     * Gets the native log of a specific crash.
     */
    crashesGetNativeCrash(req: operations.CrashesGetNativeCrashRequest, security: operations.CrashesGetNativeCrashSecurity, config?: AxiosRequestConfig): Promise<operations.CrashesGetNativeCrashResponse>;
    /**
     * Gets the native log of a specific crash as a text attachment.
     */
    crashesGetNativeCrashDownload(req: operations.CrashesGetNativeCrashDownloadRequest, security: operations.CrashesGetNativeCrashDownloadSecurity, config?: AxiosRequestConfig): Promise<operations.CrashesGetNativeCrashDownloadResponse>;
    /**
     * Gets the URI location to download json of a specific crash.
     */
    crashesGetRawCrashLocation(req: operations.CrashesGetRawCrashLocationRequest, security: operations.CrashesGetRawCrashLocationSecurity, config?: AxiosRequestConfig): Promise<operations.CrashesGetRawCrashLocationResponse>;
    /**
     * Gets a stacktrace for a specific crash.
     */
    crashesGetStacktrace(req: operations.CrashesGetStacktraceRequest, security: operations.CrashesGetStacktraceSecurity, config?: AxiosRequestConfig): Promise<operations.CrashesGetStacktraceResponse>;
    /**
     * Gets all crashes of a group.
     */
    crashesList(req: operations.CrashesListRequest, security: operations.CrashesListSecurity, config?: AxiosRequestConfig): Promise<operations.CrashesListResponse>;
    /**
     * Gets all attachments for a specific crash.
     */
    crashesListAttachments(req: operations.CrashesListAttachmentsRequest, security: operations.CrashesListAttachmentsSecurity, config?: AxiosRequestConfig): Promise<operations.CrashesListAttachmentsResponse>;
    /**
     * Gets missing symbol crash group by its id
     *
     * @remarks
     * Gets missing symbol crash group by its id
     */
    missingSymbolGroupsGet(req: operations.MissingSymbolGroupsGetRequest, security: operations.MissingSymbolGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.MissingSymbolGroupsGetResponse>;
    /**
     * Gets application level statistics for all missing symbol groups
     *
     * @remarks
     * Gets application level statistics for all missing symbol groups
     */
    missingSymbolGroupsInfo(req: operations.MissingSymbolGroupsInfoRequest, security: operations.MissingSymbolGroupsInfoSecurity, config?: AxiosRequestConfig): Promise<operations.MissingSymbolGroupsInfoResponse>;
    /**
     * Gets top N (ordered by crash count) of crash groups by missing symbol
     *
     * @remarks
     * Gets top N (ordered by crash count) of crash groups by missing symbol
     */
    missingSymbolGroupsList(req: operations.MissingSymbolGroupsListRequest, security: operations.MissingSymbolGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.MissingSymbolGroupsListResponse>;
    /**
     * Commits or aborts the symbol upload process for a new set of symbols for the specified application
     */
    symbolUploadsComplete(req: operations.SymbolUploadsCompleteRequest, security: operations.SymbolUploadsCompleteSecurity, config?: AxiosRequestConfig): Promise<operations.SymbolUploadsCompleteResponse>;
    /**
     * Begins the symbol upload process for a new set of symbols for the specified application
     */
    symbolUploadsCreate(req: operations.SymbolUploadsCreateRequest, security: operations.SymbolUploadsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.SymbolUploadsCreateResponse>;
    /**
     * Deletes a symbol upload by id for the specified application
     */
    symbolUploadsDelete(req: operations.SymbolUploadsDeleteRequest, security: operations.SymbolUploadsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SymbolUploadsDeleteResponse>;
    /**
     * Gets a symbol upload by id for the specified application
     */
    symbolUploadsGet(req: operations.SymbolUploadsGetRequest, security: operations.SymbolUploadsGetSecurity, config?: AxiosRequestConfig): Promise<operations.SymbolUploadsGetResponse>;
    /**
     * Gets the URL to download the symbol upload
     */
    symbolUploadsGetLocation(req: operations.SymbolUploadsGetLocationRequest, security: operations.SymbolUploadsGetLocationSecurity, config?: AxiosRequestConfig): Promise<operations.SymbolUploadsGetLocationResponse>;
    /**
     * Gets a list of all uploads for the specified application
     */
    symbolUploadsList(req: operations.SymbolUploadsListRequest, security: operations.SymbolUploadsListSecurity, config?: AxiosRequestConfig): Promise<operations.SymbolUploadsListResponse>;
    /**
     * Returns a particular symbol by id (uuid) for the provided application
     */
    symbolsGet(req: operations.SymbolsGetRequest, security: operations.SymbolsGetSecurity, config?: AxiosRequestConfig): Promise<operations.SymbolsGetResponse>;
    /**
     * Gets the URL to download the symbol
     */
    symbolsGetLocation(req: operations.SymbolsGetLocationRequest, security: operations.SymbolsGetLocationSecurity, config?: AxiosRequestConfig): Promise<operations.SymbolsGetLocationResponse>;
    /**
     * Returns a particular symbol by id (uuid) for the provided application
     */
    symbolsGetStatus(req: operations.SymbolsGetStatusRequest, security: operations.SymbolsGetStatusSecurity, config?: AxiosRequestConfig): Promise<operations.SymbolsGetStatusResponse>;
    /**
     * Marks a symbol by id (uuid) as ignored
     */
    symbolsIgnore(req: operations.SymbolsIgnoreRequest, security: operations.SymbolsIgnoreSecurity, config?: AxiosRequestConfig): Promise<operations.SymbolsIgnoreResponse>;
    /**
     * Returns the list of all symbols for the provided application
     */
    symbolsList(req: operations.SymbolsListRequest, security: operations.SymbolsListSecurity, config?: AxiosRequestConfig): Promise<operations.SymbolsListResponse>;
}
