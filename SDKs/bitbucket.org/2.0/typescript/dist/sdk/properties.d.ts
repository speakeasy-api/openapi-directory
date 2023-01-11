import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Properties {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteCommitHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
    **/
    deleteCommitHostedPropertyValue(req: operations.DeleteCommitHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCommitHostedPropertyValueResponse>;
    /**
     * deletePullRequestHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
    **/
    deletePullRequestHostedPropertyValue(req: operations.DeletePullRequestHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.DeletePullRequestHostedPropertyValueResponse>;
    /**
     * deleteRepositoryHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
    **/
    deleteRepositoryHostedPropertyValue(req: operations.DeleteRepositoryHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryHostedPropertyValueResponse>;
    /**
     * deleteUserHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
    **/
    deleteUserHostedPropertyValue(req: operations.DeleteUserHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserHostedPropertyValueResponse>;
    /**
     * getCommitHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
    **/
    getCommitHostedPropertyValue(req: operations.GetCommitHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitHostedPropertyValueResponse>;
    /**
     * getPullRequestHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
    **/
    getPullRequestHostedPropertyValue(req: operations.GetPullRequestHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.GetPullRequestHostedPropertyValueResponse>;
    /**
     * getRepositoryHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
    **/
    getRepositoryHostedPropertyValue(req: operations.GetRepositoryHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryHostedPropertyValueResponse>;
    /**
     * retrieveUserHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
    **/
    retrieveUserHostedPropertyValue(req: operations.RetrieveUserHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveUserHostedPropertyValueResponse>;
    /**
     * updateCommitHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
    **/
    updateCommitHostedPropertyValue(req: operations.UpdateCommitHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCommitHostedPropertyValueResponse>;
    /**
     * updatePullRequestHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
    **/
    updatePullRequestHostedPropertyValue(req: operations.UpdatePullRequestHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePullRequestHostedPropertyValueResponse>;
    /**
     * updateRepositoryHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
    **/
    updateRepositoryHostedPropertyValue(req: operations.UpdateRepositoryHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryHostedPropertyValueResponse>;
    /**
     * updateUserHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
    **/
    updateUserHostedPropertyValue(req: operations.UpdateUserHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserHostedPropertyValueResponse>;
}
