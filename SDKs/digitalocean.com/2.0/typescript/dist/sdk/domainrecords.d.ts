import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DomainRecords {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createDomainRecord - Create a New Domain Record
     *
     * To create a new record to a domain, send a POST request to
     * `/v2/domains/$DOMAIN_NAME/records`.
     *
     * The request must include all of the required fields for the domain record type
     * being added.
     *
     * See the [attribute table](#tag/Domain-Records) for details regarding record
     * types and their respective required attributes.
     *
    **/
    createDomainRecord(req: operations.CreateDomainRecordRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainRecordResponse>;
    /**
     * deleteDomainRecord - Delete a Domain Record
     *
     * To delete a record for a domain, send a DELETE request to
     * `/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`.
     *
     * The record will be deleted and the response status will be a 204. This
     * indicates a successful request with no body returned.
     *
    **/
    deleteDomainRecord(req: operations.DeleteDomainRecordRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainRecordResponse>;
    /**
     * getDomainRecord - Retrieve an Existing Domain Record
     *
     * To retrieve a specific domain record, send a GET request to `/v2/domains/$DOMAIN_NAME/records/$RECORD_ID`.
    **/
    getDomainRecord(req: operations.GetDomainRecordRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainRecordResponse>;
    /**
     * listAllDomainRecords - List All Domain Records
     *
     * To get a listing of all records configured for a domain, send a GET request to `/v2/domains/$DOMAIN_NAME/records`.
     * The list of records returned can be filtered by using the `name` and `type` query parameters. For example, to only include A records for a domain, send a GET request to `/v2/domains/$DOMAIN_NAME/records?type=A`. `name` must be a fully qualified record name. For example, to only include records matching `sub.example.com`, send a GET request to `/v2/domains/$DOMAIN_NAME/records?name=sub.example.com`. Both name and type may be used together.
     *
     *
    **/
    listAllDomainRecords(req: operations.ListAllDomainRecordsRequest, config?: AxiosRequestConfig): Promise<operations.ListAllDomainRecordsResponse>;
    /**
     * patchUpdateDomainRecord - Update a Domain Record
     *
     * To update an existing record, send a PATCH request to
     * `/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`. Any attribute valid for
     * the record type can be set to a new value for the record.
     *
     * See the [attribute table](#tag/Domain-Records) for details regarding record
     * types and their respective attributes.
     *
    **/
    patchUpdateDomainRecord(req: operations.PatchUpdateDomainRecordRequest, config?: AxiosRequestConfig): Promise<operations.PatchUpdateDomainRecordResponse>;
    /**
     * updateDomainRecord - Update a Domain Record
     *
     * To update an existing record, send a PUT request to
     * `/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`. Any attribute valid for
     * the record type can be set to a new value for the record.
     *
     * See the [attribute table](#tag/Domain-Records) for details regarding record
     * types and their respective attributes.
     *
    **/
    updateDomainRecord(req: operations.UpdateDomainRecordRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainRecordResponse>;
}
