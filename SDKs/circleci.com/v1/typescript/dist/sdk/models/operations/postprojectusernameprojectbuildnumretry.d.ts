import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostProjectUsernameProjectBuildNumRetryRequest extends SpeakeasyBase {
    /**
     * XXXXXXXXXX
     *
     * @remarks
     *
     */
    buildNum: number;
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
export declare class PostProjectUsernameProjectBuildNumRetryResponse extends SpeakeasyBase {
    /**
     * returns a summary of the new build
     */
    build?: shared.Build;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
