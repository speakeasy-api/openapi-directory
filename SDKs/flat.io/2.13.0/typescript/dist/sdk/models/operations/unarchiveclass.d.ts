import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnarchiveClassSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UnarchiveClassRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the class
     */
    class: string;
}
export declare class UnarchiveClassResponse extends SpeakeasyBase {
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
