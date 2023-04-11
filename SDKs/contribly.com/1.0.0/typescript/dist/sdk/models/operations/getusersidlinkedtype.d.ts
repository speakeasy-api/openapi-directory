import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdLinkedTypeRequest extends SpeakeasyBase {
    /**
     * Id of the user to return
     */
    id: string;
    /**
     * Type of the linked profile to fetch
     */
    type: string;
}
export declare class GetUsersIdLinkedTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful
     */
    linkedProfile?: shared.LinkedProfile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
