import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectUsernameProjectEnvvarRequest extends SpeakeasyBase {
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
export declare class GetProjectUsernameProjectEnvvarResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * XXX
     */
    envvars?: shared.Envvar[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
