import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostProjectUsernameProjectEnvvarRequest extends SpeakeasyBase {
    /**
     * XXXXXXXXX
     *
     * @remarks
     *
     */
    project: string;
    /**
     * XXXXXXXXX
     *
     * @remarks
     *
     */
    username: string;
}
export declare class PostProjectUsernameProjectEnvvarResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * XXX
     */
    envvar?: shared.Envvar;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
