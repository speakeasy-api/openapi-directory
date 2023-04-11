import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostMenusMenuIdDocumentsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostMenusMenuIdDocumentsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * Document to add
 */
export declare class PostMenusMenuIdDocumentsMultipartFormData extends SpeakeasyBase {
    author?: string;
    comment?: string;
    date?: string;
    file: PostMenusMenuIdDocumentsMultipartFormDataFile;
    title: string;
}
export declare class PostMenusMenuIdDocumentsMultipartRequest extends SpeakeasyBase {
    /**
     * Document to add
     */
    requestBody: PostMenusMenuIdDocumentsMultipartFormData;
    /**
     * Id of the space
     */
    menuId: string;
}
/**
 * Report of upload
 */
export declare class PostMenusMenuIdDocumentsMultipart201ApplicationJSON extends SpeakeasyBase {
    report?: Record<string, any>;
}
export declare class PostMenusMenuIdDocumentsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Report of upload
     */
    postMenusMenuIdDocumentsMultipart201ApplicationJSONObject?: PostMenusMenuIdDocumentsMultipart201ApplicationJSON;
}
