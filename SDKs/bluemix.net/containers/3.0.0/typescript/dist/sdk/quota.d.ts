import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Quota {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve organization and space specific quota
     *
     * @remarks
     * Retrieve the quota that is assigned to the organization and space.
     */
    getContainersQuota(req: operations.GetContainersQuotaRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersQuotaResponse>;
    /**
     * List container sizes and quota limits
     *
     * @remarks
     * This endpoint returns a list of available container sizes and the quota limit and usage for the space.
     *
     * - Container sizes: A list of available container sizes indicating the amount of container memory, disk space and virtual CPUs that can be assigned to the container.
     * - Quota limit: Lists the number of containers, public IP addresses, available container memory, and virtual CPUS that are allocated to a space.
     * - Quota usage: Lists the current number of containers, images, and public IP addresses in a space that is counted towards your quota limit.
     */
    getContainersUsage(req: operations.GetContainersUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersUsageResponse>;
    /**
     * Update space quota
     *
     * @remarks
     * This endpoint updates the quota that is allocated to a Bluemix space.
     *
     *  **Note**: Only paid accounts are eligbile to update the space quota. If you are using a free-trial account, upgrade to a paid account first.
     */
    putContainersQuota(req: operations.PutContainersQuotaRequest, config?: AxiosRequestConfig): Promise<operations.PutContainersQuotaResponse>;
}
