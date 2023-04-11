import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SalesEntriesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultSalesEntryQueryDto?: shared.PageResultSalesEntryQueryDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
