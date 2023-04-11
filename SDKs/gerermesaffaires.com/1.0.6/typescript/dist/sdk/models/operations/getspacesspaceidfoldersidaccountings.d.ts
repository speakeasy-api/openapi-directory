import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdAccountingsRequest extends SpeakeasyBase {
    /**
     * accountedon of the accounting (boolean available)
     */
    accountedOn?: string;
    /**
     * class of the accounting
     */
    class?: string;
    /**
     * date range of the documents
     */
    date?: string;
    /**
     * date range of attachment
     */
    folderDate?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Title of the accounting document
     */
    title?: string;
    /**
     * if present, the folders containing the documents are returned
     */
    withFolders?: string;
    /**
     * workbook of the accounting
     */
    workbook?: string;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdAccountingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of accountings document of the folder
     */
    getSpacesSpaceIdFoldersIdAccountings200ApplicationJSONAllOfs?: shared.Accounting[];
}
