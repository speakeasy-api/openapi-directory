import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1SalesEntriesIdRequest extends SpeakeasyBase {
    /**
     * Id of Sales Entry to return.
     */
    id: number;
}
export declare class GetV1SalesEntriesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesEntryDto?: shared.SalesEntryDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
