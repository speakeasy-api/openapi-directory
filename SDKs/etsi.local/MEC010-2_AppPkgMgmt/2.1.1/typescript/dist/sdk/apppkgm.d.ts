import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * App Package management
 */
export declare class AppPkgm {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Reads the content of the AppD of on-boarded individual application package resources.
     *
     * @remarks
     * Reads the content of the AppD of on-boarded individual application package resources.
     */
    appDGET(req: operations.AppDGETRequest, config?: AxiosRequestConfig): Promise<operations.AppDGETResponse>;
    /**
     * Fetch the onboarded application package content identified by appPkgId or appDId.
     *
     * @remarks
     * Fetch the onboarded application package content identified by appPkgId or appDId.
     */
    appDIdGET(req: operations.AppDIdGETRequest, config?: AxiosRequestConfig): Promise<operations.AppDIdGETResponse>;
    /**
     * Uploads the content of application package.
     *
     * @remarks
     * Uploads the content of application package.
     */
    appDIdPUT(req: operations.AppDIdPUTRequest, config?: AxiosRequestConfig): Promise<operations.AppDIdPUTResponse>;
    /**
     * Fetch the onboarded application package content identified by appPkgId or appDId.
     *
     * @remarks
     * Fetch the onboarded application package content identified by appPkgId or appDId.
     */
    appPkgGET(req: operations.AppPkgGETRequest, config?: AxiosRequestConfig): Promise<operations.AppPkgGETResponse>;
    /**
     * Reads the content of the AppD of on-boarded individual application package resources.
     *
     * @remarks
     * Reads the content of the AppD of on-boarded individual application package resources.
     */
    appPkgIdGET(req: operations.AppPkgIdGETRequest, config?: AxiosRequestConfig): Promise<operations.AppPkgIdGETResponse>;
    /**
     * Uploads the content of application package.
     *
     * @remarks
     * Uploads the content of application package.
     */
    appPkgPUT(req: operations.AppPkgPUTRequest, config?: AxiosRequestConfig): Promise<operations.AppPkgPUTResponse>;
    /**
     * Deletes an individual application package resources
     *
     * @remarks
     * Deletes an individual application package resources
     */
    appPackageDELETE(req: operations.AppPackageDELETERequest, config?: AxiosRequestConfig): Promise<operations.AppPackageDELETEResponse>;
    /**
     * Queries the information related to individual application package resources
     *
     * @remarks
     * Queries the information related to individual application package resources
     */
    appPackageGET(req: operations.AppPackageGETRequest, config?: AxiosRequestConfig): Promise<operations.AppPackageGETResponse>;
    /**
     * Updates the operational state of an individual application package resource
     *
     * @remarks
     * Updates the operational state of an individual application package resources
     */
    appPackagePATCH(req: operations.AppPackagePATCHRequest, config?: AxiosRequestConfig): Promise<operations.AppPackagePATCHResponse>;
    /**
     * Queries information relating to on-boarded application packages in the MEO
     *
     * @remarks
     * queries information relating to on-boarded application packages in the MEO
     */
    appPackagesGET(req: operations.AppPackagesGETRequest, config?: AxiosRequestConfig): Promise<operations.AppPackagesGETResponse>;
    /**
     * Create a resource for on-boarding an application package to a MEO
     *
     * @remarks
     * Create a resource for on-boarding an application package to a MEO
     */
    appPackagesPOST(req: shared.CreateAppPkg, config?: AxiosRequestConfig): Promise<operations.AppPackagesPOSTResponse>;
    /**
     * Deletes the individual subscription to notifications about application package changes in MEO.
     *
     * @remarks
     * Deletes the individual subscription to notifications about application package changes in MEO.
     */
    individualSubscriptionDELETE(req: operations.IndividualSubscriptionDELETERequest, config?: AxiosRequestConfig): Promise<operations.IndividualSubscriptionDELETEResponse>;
    /**
     * Used to represent an individual subscription to notifications about application package changes.
     *
     * @remarks
     * Used to represent an individual subscription to notifications about application package changes.
     */
    individualSubscriptionGET(req: operations.IndividualSubscriptionGETRequest, config?: AxiosRequestConfig): Promise<operations.IndividualSubscriptionGETResponse>;
    /**
     * used to retrieve the information of subscriptions to individual application package resource in MEO
     *
     * @remarks
     * used to retrieve the information of subscriptions to individual application package resource in MEO package
     */
    subscriptionsGET(config?: AxiosRequestConfig): Promise<operations.SubscriptionsGETResponse>;
    /**
     * Subscribe to notifications about on-boarding an application package
     *
     * @remarks
     * Subscribe to notifications about on-boarding an application package
     */
    subscriptionsPOST(req: shared.AppPkgSubscription, config?: AxiosRequestConfig): Promise<operations.SubscriptionsPOSTResponse>;
}
