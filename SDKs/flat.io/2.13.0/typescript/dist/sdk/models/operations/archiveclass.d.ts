import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArchiveClassSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class ArchiveClassRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the class
     */
    class: string;
}
export declare class ArchiveClassResponse extends SpeakeasyBase {
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
