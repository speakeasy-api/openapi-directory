import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshRequest extends SpeakeasyBase {
    /**
     * Id of the document
     */
    documentId: string;
    /**
     * Id of the folder
     */
    folderId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of the payroll generated
 */
export declare class PostSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefresh201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefreshResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of the payroll generated
     */
    postSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefresh201ApplicationJSONObject?: PostSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRefresh201ApplicationJSON;
}
