import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectUsernameProjectBuildNumTestsRequest extends SpeakeasyBase {
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
export declare class GetProjectUsernameProjectBuildNumTestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * test metadata for a build
     *
     * @remarks
     *
     */
    tests?: shared.Tests;
}
