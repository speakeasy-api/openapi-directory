import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostProjectUsernameProjectBuildNumCancelRequest extends SpeakeasyBase {
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
export declare class PostProjectUsernameProjectBuildNumCancelResponse extends SpeakeasyBase {
    /**
     * returns a summary of the build
     */
    build?: shared.Build;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
