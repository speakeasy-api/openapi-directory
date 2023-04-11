import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdDeliveriesJournalRequest extends SpeakeasyBase {
    /**
     * accounting dates of the document
     */
    accountingDate?: string;
    /**
     * class of the document
     */
    class?: string;
    /**
     * delivery dates of the document
     */
    deliveryDate?: string;
    /**
     * numbers of the document
     */
    number?: number;
    /**
     * Name of the target folder of the document
     */
    targetFolderName?: string;
    /**
     * Id of the customer folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdDeliveriesJournal200ApplicationJSONTargetFolder extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class GetSpacesSpaceIdFoldersIdDeliveriesJournal200ApplicationJSON extends SpeakeasyBase {
    author?: string;
    class?: string;
    deleteDate?: string;
    deliveryDate?: string;
    id?: string;
    number?: number;
    targetFolder?: GetSpacesSpaceIdFoldersIdDeliveriesJournal200ApplicationJSONTargetFolder;
}
export declare class GetSpacesSpaceIdFoldersIdDeliveriesJournalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of document (journal)
     */
    getSpacesSpaceIdFoldersIdDeliveriesJournal200ApplicationJSONObjects?: GetSpacesSpaceIdFoldersIdDeliveriesJournal200ApplicationJSON[];
}
