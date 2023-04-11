import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdNominativeSocialDeclarationsRequest extends SpeakeasyBase {
    /**
     * range date of the documents
     */
    date?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Id of the folder social
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdNominativeSocialDeclarations200ApplicationJSON extends SpeakeasyBase {
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
export declare class GetSpacesSpaceIdFoldersIdNominativeSocialDeclarationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of nominative social declarations of the folder social
     */
    getSpacesSpaceIdFoldersIdNominativeSocialDeclarations200ApplicationJSONAnies?: GetSpacesSpaceIdFoldersIdNominativeSocialDeclarations200ApplicationJSON[];
}
