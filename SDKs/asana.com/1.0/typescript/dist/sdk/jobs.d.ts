import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Jobs represent processes that handle asynchronous work. A job created when an endpoint requests an action that will be handled asynchronously, such as project or task duplication.
 *
 * @remarks
 *
 * Only the creator of the duplication process can access the duplication status of the new object.
 *
 * *Note*: With any work that is handled asynchronously (e.g., [project instantation from a template](/docs/instantiate-a-project-from-a-project-template), duplicating a [task](/docs/duplicate-a-task) or [project](/docs/duplicate-a-project), etc.), the *intermittent states* of newly-created objects may not be consistent. That is, object properties may return different values each time when polled until the job `status` has returned a `succeeded` value.
 */
export declare class Jobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a job by id
     *
     * @remarks
     * Returns the full record for a job.
     */
    getJob(req: operations.GetJobRequest, config?: AxiosRequestConfig): Promise<operations.GetJobResponse>;
}
