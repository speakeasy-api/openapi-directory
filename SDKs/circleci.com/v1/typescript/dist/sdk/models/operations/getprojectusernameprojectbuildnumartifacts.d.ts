import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectUsernameProjectBuildNumArtifactsRequest extends SpeakeasyBase {
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
export declare class GetProjectUsernameProjectBuildNumArtifactsResponse extends SpeakeasyBase {
    /**
     * List the artifacts produced by a given build
     */
    artifacts?: shared.Artifact[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
