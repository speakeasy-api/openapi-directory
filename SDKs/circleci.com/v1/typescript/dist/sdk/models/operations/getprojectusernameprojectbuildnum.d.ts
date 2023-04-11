import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectUsernameProjectBuildNumRequest extends SpeakeasyBase {
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
export declare class GetProjectUsernameProjectBuildNumResponse extends SpeakeasyBase {
    /**
     * Full details for a single build
     */
    buildDetail?: shared.BuildDetail;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
