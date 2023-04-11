import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://featurestore-runtime.sagemaker.{region}.amazonaws.com", "https://featurestore-runtime.sagemaker.{region}.amazonaws.com", "http://featurestore-runtime.sagemaker.{region}.amazonaws.com.cn", "https://featurestore-runtime.sagemaker.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <p>Contains all data plane API operations and data types for the Amazon SageMaker Feature Store. Use this API to put, delete, and retrieve (get) features from a feature store.</p> <p>Use the following operations to configure your <code>OnlineStore</code> and <code>OfflineStore</code> features, and to create and manage feature groups:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateFeatureGroup.html">CreateFeatureGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteFeatureGroup.html">DeleteFeatureGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeFeatureGroup.html">DescribeFeatureGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListFeatureGroups.html">ListFeatureGroups</a> </p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/sagemaker/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.
     */
    batchGetRecord(req: operations.BatchGetRecordRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetRecordResponse>;
    /**
     * Deletes a <code>Record</code> from a <code>FeatureGroup</code>. When the <code>DeleteRecord</code> API is called a new record will be added to the <code>OfflineStore</code> and the <code>Record</code> will be removed from the <code>OnlineStore</code>. This record will have a value of <code>True</code> in the <code>is_deleted</code> column.
     */
    deleteRecord(req: operations.DeleteRecordRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecordResponse>;
    /**
     * Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with <code>RecordIdentifierValue</code> is found, then an empty result is returned.
     */
    getRecord(req: operations.GetRecordRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordResponse>;
    /**
     * Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code> API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is the latest record for the <code>recordIdentifier</code>, the record is written to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a historic record, it is written only to the <code>OfflineStore</code>.
     */
    putRecord(req: operations.PutRecordRequest, config?: AxiosRequestConfig): Promise<operations.PutRecordResponse>;
}
