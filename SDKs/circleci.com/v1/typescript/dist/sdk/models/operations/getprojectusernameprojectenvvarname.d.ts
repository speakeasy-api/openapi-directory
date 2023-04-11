import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectUsernameProjectEnvvarNameRequest extends SpeakeasyBase {
    /**
     * XXXXXXXXXX
     *
     * @remarks
     *
     */
    name: string;
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
export declare class GetProjectUsernameProjectEnvvarNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * XXX
     */
    envvar?: shared.Envvar;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
