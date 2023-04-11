import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSessionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A session
     */
    session?: shared.Session;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
