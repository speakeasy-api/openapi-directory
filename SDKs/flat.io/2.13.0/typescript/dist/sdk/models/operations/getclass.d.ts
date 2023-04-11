import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClassSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetClassRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the class
     */
    class: string;
}
export declare class GetClassResponse extends SpeakeasyBase {
    /**
     * The new class details
     */
    classDetails?: shared.ClassDetails;
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
