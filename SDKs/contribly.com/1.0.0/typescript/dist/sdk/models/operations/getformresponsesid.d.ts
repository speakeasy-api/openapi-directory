import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFormResponsesIdRequest extends SpeakeasyBase {
    /**
     * Id of the assignment to return
     */
    id: string;
}
export declare class GetFormResponsesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Form response found
     */
    formResponse?: shared.FormResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
