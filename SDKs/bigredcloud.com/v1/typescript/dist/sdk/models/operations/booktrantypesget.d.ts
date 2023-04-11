import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BookTranTypesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultBookTranTypeDto?: shared.PageResultBookTranTypeDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
