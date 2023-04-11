import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdSpacesInvoicingsRequest extends SpeakeasyBase {
    /**
     * date range of the documents
     */
    date?: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdSpacesInvoicingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of csv invoicings
     */
    getSpacesSpaceIdSpacesInvoicings200ApplicationJSONAllOfs?: shared.SpacesInvoicing[];
}
