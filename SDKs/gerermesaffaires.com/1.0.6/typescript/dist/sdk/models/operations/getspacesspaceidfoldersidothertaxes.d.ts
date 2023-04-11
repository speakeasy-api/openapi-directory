import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdOtherTaxesRequest extends SpeakeasyBase {
    /**
     * range date of the documents
     */
    date?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Id of the folder taxcontract
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdOtherTaxesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of other taxes declarations
     */
    getSpacesSpaceIdFoldersIdOtherTaxes200ApplicationJSONAllOfs?: shared.OtherTax[];
}
