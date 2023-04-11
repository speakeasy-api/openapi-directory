import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Properties {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a commit application property
     *
     * @remarks
     * Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
     */
    deleteCommitHostedPropertyValue(req: operations.DeleteCommitHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCommitHostedPropertyValueResponse>;
    /**
     * Delete a pull request application property
     *
     * @remarks
     * Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
     */
    deletePullRequestHostedPropertyValue(req: operations.DeletePullRequestHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.DeletePullRequestHostedPropertyValueResponse>;
    /**
     * Delete a repository application property
     *
     * @remarks
     * Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
     */
    deleteRepositoryHostedPropertyValue(req: operations.DeleteRepositoryHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryHostedPropertyValueResponse>;
    /**
     * Delete a user application property
     *
     * @remarks
     * Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
     */
    deleteUserHostedPropertyValue(req: operations.DeleteUserHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserHostedPropertyValueResponse>;
    /**
     * Get a commit application property
     *
     * @remarks
     * Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
     */
    getCommitHostedPropertyValue(req: operations.GetCommitHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitHostedPropertyValueResponse>;
    /**
     * Get a pull request application property
     *
     * @remarks
     * Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
     */
    getPullRequestHostedPropertyValue(req: operations.GetPullRequestHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.GetPullRequestHostedPropertyValueResponse>;
    /**
     * Get a repository application property
     *
     * @remarks
     * Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
     */
    getRepositoryHostedPropertyValue(req: operations.GetRepositoryHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryHostedPropertyValueResponse>;
    /**
     * Get a user application property
     *
     * @remarks
     * Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
     */
    retrieveUserHostedPropertyValue(req: operations.RetrieveUserHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveUserHostedPropertyValueResponse>;
    /**
     * Update a commit application property
     *
     * @remarks
     * Update an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
     */
    updateCommitHostedPropertyValue(req: operations.UpdateCommitHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCommitHostedPropertyValueResponse>;
    /**
     * Update a pull request application property
     *
     * @remarks
     * Update an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
     */
    updatePullRequestHostedPropertyValue(req: operations.UpdatePullRequestHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePullRequestHostedPropertyValueResponse>;
    /**
     * Update a repository application property
     *
     * @remarks
     * Update an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
     */
    updateRepositoryHostedPropertyValue(req: operations.UpdateRepositoryHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryHostedPropertyValueResponse>;
    /**
     * Update a user application property
     *
     * @remarks
     * Update an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
     */
    updateUserHostedPropertyValue(req: operations.UpdateUserHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserHostedPropertyValueResponse>;
}
