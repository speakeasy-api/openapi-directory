import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MetaGetOctocatRequest extends SpeakeasyBase {
    /**
     * The words to show in Octocat's speech bubble
     */
    s?: string;
}
export declare class MetaGetOctocatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    metaGetOctocat200ApplicationOctocatStreamString?: string;
}
