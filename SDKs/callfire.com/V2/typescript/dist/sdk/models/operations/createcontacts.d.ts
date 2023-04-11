import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateContactsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateContactsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    resourceIdList?: shared.ResourceIdList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
