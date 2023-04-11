import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFormsRequest extends SpeakeasyBase {
    /**
     * Restrict results to forms owned by this user.
     */
    ownedBy: string;
}
export declare class GetFormsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of forms
     */
    forms?: shared.Form[];
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
