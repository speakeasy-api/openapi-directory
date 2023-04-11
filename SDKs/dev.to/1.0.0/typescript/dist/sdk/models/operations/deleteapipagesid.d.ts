import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteApiPagesIdRequest extends SpeakeasyBase {
    /**
     * The ID of the page.
     */
    id: number;
}
export declare class DeleteApiPagesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful
     */
    page?: shared.Page;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
