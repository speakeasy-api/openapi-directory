import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostMenusMenuIdDocumentsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostMenusMenuIdDocumentsApplicationJSONFile extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
/**
 * Document to add
 */
export declare class PostMenusMenuIdDocumentsApplicationJSON extends SpeakeasyBase {
    author?: string;
    comment?: string;
    date?: string;
    file: PostMenusMenuIdDocumentsApplicationJSONFile;
    title: string;
}
export declare class PostMenusMenuIdDocumentsJsonRequest extends SpeakeasyBase {
    /**
     * Document to add
     */
    requestBody: PostMenusMenuIdDocumentsApplicationJSON;
    /**
     * Id of the space
     */
    menuId: string;
}
/**
 * Report of upload
 */
export declare class PostMenusMenuIdDocumentsJson201ApplicationJSON extends SpeakeasyBase {
    report?: Record<string, any>;
}
export declare class PostMenusMenuIdDocumentsJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Report of upload
     */
    postMenusMenuIdDocumentsJSON201ApplicationJSONObject?: PostMenusMenuIdDocumentsJson201ApplicationJSON;
}
