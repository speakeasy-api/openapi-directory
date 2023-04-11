import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodesOfConductGetConductCodeRequest extends SpeakeasyBase {
    key: string;
}
export declare class CodesOfConductGetConductCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    codeOfConduct?: shared.CodeOfConduct;
}
