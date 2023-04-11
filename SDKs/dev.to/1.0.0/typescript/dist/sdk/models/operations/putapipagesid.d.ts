import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutApiPagesIdRequest extends SpeakeasyBase {
    page?: shared.Page;
    /**
     * The ID of the page.
     */
    id: number;
}
export declare class PutApiPagesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful
     */
    page?: shared.Page;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
