import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReposDeleteReleaseRequest extends SpeakeasyBase {
    owner: string;
    /**
     * release_id parameter
     */
    releaseId: number;
    repo: string;
}
export declare class ReposDeleteReleaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
