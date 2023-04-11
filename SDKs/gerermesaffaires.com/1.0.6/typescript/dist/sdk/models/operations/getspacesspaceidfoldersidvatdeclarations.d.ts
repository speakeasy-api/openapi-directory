import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdVatDeclarationsRequest extends SpeakeasyBase {
    /**
     * range date of the documents
     */
    date?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Id of the folder result and taxation
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdVatDeclarationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of VAT declarations
     */
    getSpacesSpaceIdFoldersIdVatDeclarations200ApplicationJSONAllOfs?: shared.VATDeclaration[];
}
