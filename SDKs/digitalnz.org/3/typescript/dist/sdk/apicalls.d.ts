import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class APICalls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Run queries against DigitalNZ metadata search service.
     *
     * @remarks
     * This is the main search endpoint allowing queries against the records database.
     */
    getRecordsFormat(req: operations.GetRecordsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordsFormatResponse>;
    /**
     * View metadata associated with a single record.
     *
     * @remarks
     * If you know its `record_id` you can use this endpoint to view all metadata associated with that specific record.
     *
     */
    getRecordsRecordIdFormat(req: operations.GetRecordsRecordIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordsRecordIdFormatResponse>;
    /**
     * The "More Like This" call returns similar records to the specified ID.
     *
     *
     * @remarks
     * This feature returns a set of search results that are similar (ie have similar metadata) to a specific record.
     *
     */
    getRecordsRecordIdMoreLikeThisFormat(req: operations.GetRecordsRecordIdMoreLikeThisFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordsRecordIdMoreLikeThisFormatResponse>;
}
