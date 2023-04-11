import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateClassSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateClassResponse extends SpeakeasyBase {
    /**
     * The new class details
     */
    classDetails?: shared.ClassDetails;
    contentType: string;
    /**
     * Account overquota
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
