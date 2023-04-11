import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Type of entity related to the tag
 */
export declare enum TagsCountTypeEnum {
    Tp = "tp",
    Tl = "tl",
    Dp = "dp",
    Gr = "gr"
}
export declare class TagsCountRequest extends SpeakeasyBase {
    /**
     * Comma separated list of datapoints id to filter by
     */
    datapoints?: string;
    /**
     * Comma separated list of groups id to filter by
     */
    groups?: string;
    /**
     * Name of the tag
     */
    name?: string;
    /**
     * Type of entity related to the tag
     */
    type?: TagsCountTypeEnum;
}
export declare class TagsCountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    systemObject?: Record<string, any>;
}
