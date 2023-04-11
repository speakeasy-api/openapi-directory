import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
 */
export declare class Attachments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Upload an attachment
     *
     * @remarks
     * Upload an attachment.
     *
     * This method uploads an attachment on an object and returns the compact
     * record for the created attachment object. This is possible by either:
     *
     * - Providing the URL of the external resource being attached, or
     * - Downloading the file content first and then uploading it as any other attachment. Note that it is not possible to attach
     * files from third party services such as Dropbox, Box, Vimeo & Google Drive via the API
     *
     * The 100MB size limit on attachments in Asana is enforced on this endpoint.
     *
     * This endpoint expects a multipart/form-data encoded request containing the full contents of the file to be uploaded.
     *
     * Requests made should follow the HTTP/1.1 specification that line
     * terminators are of the form `CRLF` or `\r\n` outlined
     * [here](http://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Basic-Rules) in order for the server to reliably and properly handle the request.
     */
    createAttachmentForObject(req: operations.CreateAttachmentForObjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateAttachmentForObjectResponse>;
    /**
     * Delete an attachment
     *
     * @remarks
     * Deletes a specific, existing attachment.
     *
     * Returns an empty data record.
     */
    deleteAttachment(req: operations.DeleteAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttachmentResponse>;
    /**
     * Get an attachment
     *
     * @remarks
     * Get the full record for a single attachment.
     */
    getAttachment(req: operations.GetAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.GetAttachmentResponse>;
    /**
     * Get attachments from an object
     *
     * @remarks
     * Returns the compact records for all attachments on the object.
     *
     * There are three possible `parent` values for this request: `project`, `project_brief`, and `task`. For a project, an attachment refers to a file uploaded to the "Key resources" section in the project Overview. For a project brief, an attachment refers to inline files in the project brief itself. For a task, an attachment refers to a file directly associated to that task.
     */
    getAttachmentsForObject(req: operations.GetAttachmentsForObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetAttachmentsForObjectResponse>;
}
