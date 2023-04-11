import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteContactSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteContactRequest extends SpeakeasyBase {
    /**
     * An Id of a contact
     */
    id: number;
}
export declare class DeleteContactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
