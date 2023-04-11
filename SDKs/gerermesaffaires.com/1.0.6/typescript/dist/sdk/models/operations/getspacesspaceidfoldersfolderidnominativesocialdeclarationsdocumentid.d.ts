import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdRequest extends SpeakeasyBase {
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
 * A nominative social declaration of the folder social
 */
export declare class GetSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentId200ApplicationJSON extends SpeakeasyBase {
    author?: string;
    begin?: string;
    class?: string[];
    code?: string;
    comment?: string;
    date?: string;
    employeeContributions?: number;
    employerContributions?: number;
    end?: string;
    extension?: string;
    folderDate?: string;
    id?: string;
    netAmount?: number;
    payrollId?: string;
    title?: string;
    totalGrossAmount?: number;
}
export declare class GetSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A nominative social declaration of the folder social
     */
    getSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentId200ApplicationJSONObject?: GetSpacesSpaceIdFoldersFolderIdNominativeSocialDeclarationsDocumentId200ApplicationJSON;
}
