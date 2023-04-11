import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnrollClassSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class EnrollClassRequest extends SpeakeasyBase {
    /**
     * The enrollment code, available to the teacher in `ClassDetails`
     *
     * @remarks
     *
     */
    enrollmentCode: string;
}
export declare class EnrollClassResponse extends SpeakeasyBase {
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
