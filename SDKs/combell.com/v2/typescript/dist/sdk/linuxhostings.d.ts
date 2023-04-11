import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Manage your linux hostings.
 */
export declare class LinuxHostings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a scheduled task
     */
    addScheduledTasks(req: operations.AddScheduledTasksRequest, config?: AxiosRequestConfig): Promise<operations.AddScheduledTasksResponse>;
    /**
     * Add a SSH key
     */
    addSshKey(req: operations.AddSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.AddSshKeyResponse>;
    /**
     * Configure PHP APCu setting
     */
    changeApcu(req: operations.ChangeApcuRequest, config?: AxiosRequestConfig): Promise<operations.ChangeApcuResponse>;
    /**
     * Configure auto redirect
     */
    changeAutoRedirect(req: operations.ChangeAutoRedirectRequest, config?: AxiosRequestConfig): Promise<operations.ChangeAutoRedirectResponse>;
    /**
     * Enable/disable GZIP compression
     */
    changeGzipCompression(req: operations.ChangeGzipCompressionRequest, config?: AxiosRequestConfig): Promise<operations.ChangeGzipCompressionResponse>;
    /**
     * Configure let's encrypt
     */
    changeLetsEncrypt(req: operations.ChangeLetsEncryptRequest, config?: AxiosRequestConfig): Promise<operations.ChangeLetsEncryptResponse>;
    /**
     * Configure PHP memory limit
     */
    changePhpMemoryLimit(req: operations.ChangePhpMemoryLimitRequest, config?: AxiosRequestConfig): Promise<operations.ChangePhpMemoryLimitResponse>;
    /**
     * Change the Linux hosting PHP version.
     */
    changePhpVersion(req: operations.ChangePhpVersionRequest, config?: AxiosRequestConfig): Promise<operations.ChangePhpVersionResponse>;
    /**
     * Configure FTP
     */
    configureFtp(req: operations.ConfigureFtpRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureFtpResponse>;
    /**
     * Configure HTTP/2
     */
    configureHttp2(req: operations.ConfigureHttp2Request, config?: AxiosRequestConfig): Promise<operations.ConfigureHttp2Response>;
    /**
     * Configure a scheduled task
     */
    configureScheduledTask(req: operations.ConfigureScheduledTaskRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureScheduledTaskResponse>;
    /**
     * Configure SSH
     */
    configureSsh(req: operations.ConfigureSshRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureSshResponse>;
    /**
     * Create a host header
     */
    createHostHeader(req: operations.CreateHostHeaderRequest, config?: AxiosRequestConfig): Promise<operations.CreateHostHeaderResponse>;
    /**
     * Create a subsite
     */
    createSubsite(req: operations.CreateSubsiteRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubsiteResponse>;
    /**
     * Delete a scheduled task
     */
    deleteScheduledTask(req: operations.DeleteScheduledTaskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScheduledTaskResponse>;
    /**
     * Delete a SSH key
     */
    deleteSshKey(req: operations.DeleteSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSshKeyResponse>;
    /**
     * Delete a subsite
     */
    deleteSubsite(req: operations.DeleteSubsiteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubsiteResponse>;
    /**
     * Get the available PHP versions.
     */
    getAvailablePhpVersions(req: operations.GetAvailablePhpVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailablePhpVersionsResponse>;
    /**
     * Linux hosting detail
     */
    getLinuxHosting(req: operations.GetLinuxHostingRequest, config?: AxiosRequestConfig): Promise<operations.GetLinuxHostingResponse>;
    /**
     * Overview of linux hostings
     */
    getLinuxHostings(req: operations.GetLinuxHostingsRequest, config?: AxiosRequestConfig): Promise<operations.GetLinuxHostingsResponse>;
    /**
     * Get scheduled task detail
     */
    getScheduledTask(req: operations.GetScheduledTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduledTaskResponse>;
    /**
     * Overview of scheduled tasks
     *
     * @remarks
     * Manage scheduled tasks which are also manageable via the control panel.
     */
    getScheduledTasks(req: operations.GetScheduledTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduledTasksResponse>;
    /**
     * Overview of SSH keys
     */
    getSshKeys(req: operations.GetSshKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetSshKeysResponse>;
}
