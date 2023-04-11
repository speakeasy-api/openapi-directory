import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * A payslip to modify
 */
export declare class PatchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRequestBody extends SpeakeasyBase {
    begin?: string;
    employeeContributions?: number;
    employerContributions?: number;
    end?: string;
    fixedGrossAmount?: number;
    netAmount?: number;
    totalGrossAmount?: number;
    vacation?: number;
    variableGrossAmount?: number;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRequest extends SpeakeasyBase {
    /**
     * A payslip to modify
     */
    requestBody?: PatchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdRequestBody;
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
export declare class PatchSpacesSpaceIdFoldersFolderIdPayslipsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
