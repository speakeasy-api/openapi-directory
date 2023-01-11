import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Resources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addFolder - Create a folder
     *
     * Create a new empty folder at the specified path. New files can be uploaded via the [/resources/upload](#operation/uploadFile) endpoint.
     *
     * **Notes:**
     * - Authenticated user should have modify permission.
     *
    **/
    addFolder(req: operations.AddFolderRequest, config?: AxiosRequestConfig): Promise<operations.AddFolderResponse>;
    /**
     * compressFiles - Compress resources
     *
     * Create a zip archive containing the files from given set of paths. Note that this can be a very slow operation if you have indicated many files should be included in the archive.
     *
     * **Notes:**
     * - Authenticated user should have modify permission.
     *
    **/
    compressFiles(req: operations.CompressFilesRequest, config?: AxiosRequestConfig): Promise<operations.CompressFilesResponse>;
    /**
     * copyResources - Copy resources
     *
     * Copies a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account.
     * In the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be copied to the
     * root of the `parentResource`.
     *
     * **Notes:**
     * - Authenticated user should have modify permission.
     *
    **/
    copyResources(req: operations.CopyResourcesRequest, config?: AxiosRequestConfig): Promise<operations.CopyResourcesResponse>;
    /**
     * deleteResourceById - Delete a Resource
     *
     * Delete a single file or folder resource. Deleting a folder will also delete all of the contents.
     *
     * **Notes:**
     * - Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
     * - There is no way to un-delete a deleted resource.
     *
    **/
    deleteResourceById(req: operations.DeleteResourceByIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourceByIdResponse>;
    /**
     * deleteResources - Delete Resources
     *
     * Delete multiple file or folder resourcess. Deleting a folder resource will also delete any resources in that folder.
     *
     * **Notes:**
     * - Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
     * - It is not possible to un-delete a deleted resource.
     *
    **/
    deleteResources(req: operations.DeleteResourcesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcesResponse>;
    /**
     * download - Download a file
     *
     * Downloads a file from the server. Whenever more than one file is being downloaded, the file are first zipped into  a single file before the download starts, and the resulting zip file is named to match the `downloadArchiveName` parameter.
     *
     * **NOTE**: Downloading many files at once  may result in a long delay before the API will return a response. You may need to override default timeout values in your API client, or download files individually.
    **/
    download(req: operations.DownloadRequest, config?: AxiosRequestConfig): Promise<operations.DownloadResponse>;
    /**
     * extractFiles - Extract resources
     *
     * Extract the contents of a zip archive to a specified directory. Note that this can be a very slow operation.
     *
     * **Notes:**
     * - You must have  [modify permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to do this.
     *
    **/
    extractFiles(req: operations.ExtractFilesRequest, config?: AxiosRequestConfig): Promise<operations.ExtractFilesResponse>;
    /**
     * getPreviewImage - Preview a file
     *
     * Returns a resized image of the specified document for supported file types.
     *
     * Image data returned is encoded in base64 format and can be viewed using the `<img>` element.
     *
     * ```<img src='data:image/jpeg;base64' + meta.image/>```
     *
     * **Notes:**
     * - Supported files types are `'jpg'`, `'jpeg'`, `'gif'`, `'png'`, `'bmp'`, `'pdf'`, `'psd'`, `'doc'`
     *
    **/
    getPreviewImage(req: operations.GetPreviewImageRequest, config?: AxiosRequestConfig): Promise<operations.GetPreviewImageResponse>;
    /**
     * getResourceInfo - Get Resource Properties
     *
     * Returns details for specified file/folder id or hash, including upload date, size and type. For the full list of returned properties, see the response syntax, below.
     *
     * **Notes:**
     * - Authenticated user should have list permission.
     *
    **/
    getResourceInfo(req: operations.GetResourceInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceInfoResponse>;
    /**
     * getResourceInfoById - Get resource metadata
     *
     * Returns metadata for specified file/folder path, including upload date, size and type. For the full list of returned properties, see the response syntax, below.
     *
     * **Notes:**
     * - Authenticated user should have list permission.
     *
    **/
    getResourceInfoById(req: operations.GetResourceInfoByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceInfoByIdResponse>;
    /**
     * listResourceContents - List contents of folder
     *
     * Returns a list of files/folders for the parent resource ID.
     *
     * You can use this API call to get information about all files and folders at a specified path. By default, the API returns basic metadata on each file/folder. An optional `include` parameter forces the return of additional metadata. As with all API calls, the path should be the full path relative to the user's home directory (e.g. ** /myfiles/some_folder**).
     *
     * **Notes:**
     * - Authenticated user should have list permission.
     *
    **/
    listResourceContents(req: operations.ListResourceContentsRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceContentsResponse>;
    /**
     * listResources - Get a list of all resources
     *
     * Returns a list of files and folders in the account. Use the `resource` query parameter to indicate the folder you wish to search in (which can be /).
     *
     * **Searching for Files and Folders**
     *
     * Using the `name` parameter triggers search mode, which will search the entire directory structure under the provided `resource` for files or folders with names matching the provided `name`. This supports wildcard matching such as:
     *
     * - \*Report\* would find any files or folders with "Report" in the name.
     * - Data\_202?-09-30.xlsx would match items such as "Data\_2020-09-30.xlsx", "DATA\_2021-09-30.xlsx", "data\_2022-09-30.xlsx" etc.
     * - sales\* would find any files or folders starting with the word "Sales"
     * - \*.csv would locate any files ending in ".csv"
     * - \* matches everything within the directory tree starting at your given `resource`
     *
     * The search is not case-sensitive. Searching for Clients\* or clients\* or CLIENTS\*, etc. will provide identical results
     *
     * If you are using the `name` parameter to run a search, the `type` parameter will be ignored by the server.
    **/
    listResources(req: operations.ListResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListResourcesResponse>;
    /**
     * moveResources - Move resources
     *
     * Moves a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account.
     * In the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be moved to the root of the `parentResource`.
     *
     * **Notes:**
     * - Authenticated user should have modify permission.
     *
    **/
    moveResources(req: operations.MoveResourcesRequest, config?: AxiosRequestConfig): Promise<operations.MoveResourcesResponse>;
    /**
     * updateResourceById - Rename a resource.
     *
     * Update the specified file or folder resource record's "name" parameter. The resource is identified by the numeric resource ID that is passed in as the last segment of the URI.
     *
    **/
    updateResourceById(req: operations.UpdateResourceByIdRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResourceByIdResponse>;
    /**
     * uploadFile - Upload a file
     *
     * Uploads a file to a specified path, with optional support for resuming a partially uploaded existing file.
     *
    **/
    uploadFile(req: operations.UploadFileRequest, config?: AxiosRequestConfig): Promise<operations.UploadFileResponse>;
}
