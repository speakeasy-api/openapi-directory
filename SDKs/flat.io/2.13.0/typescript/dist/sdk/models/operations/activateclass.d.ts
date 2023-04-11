import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivateClassSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class ActivateClassRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the class
     */
    class: string;
}
export declare class ActivateClassResponse extends SpeakeasyBase {
    /**
     * The class details
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
