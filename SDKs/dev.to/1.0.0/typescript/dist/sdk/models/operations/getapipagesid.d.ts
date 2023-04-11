import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiPagesIdRequest extends SpeakeasyBase {
    /**
     * The ID of the page.
     */
    id: number;
}
export declare class GetApiPagesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful
     */
    page?: shared.Page;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
