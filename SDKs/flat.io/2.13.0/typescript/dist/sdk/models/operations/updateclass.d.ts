import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateClassSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class UpdateClassRequest extends SpeakeasyBase {
    /**
     * Details of the Class
     */
    classUpdate?: shared.ClassUpdate;
    /**
     * Unique identifier of the class
     */
    class: string;
}
export declare class UpdateClassResponse extends SpeakeasyBase {
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
