import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A payroll to modify
 */
export declare class PatchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRequestBody extends SpeakeasyBase {
    begin?: string;
    employeeContributions?: number;
    employerContributions?: number;
    end?: string;
    netAmount?: number;
    totalGrossAmount?: number;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRequest extends SpeakeasyBase {
    /**
     * A payroll to modify
     */
    requestBody?: PatchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdRequestBody;
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
export declare class PatchSpacesSpaceIdFoldersFolderIdPayrollsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
