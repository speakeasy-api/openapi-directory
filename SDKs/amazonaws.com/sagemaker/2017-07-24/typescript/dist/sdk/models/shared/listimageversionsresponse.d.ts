import { SpeakeasyBase } from "../../../internal/utils";
import { ImageVersion } from "./imageversion";
/**
 * Success
 */
export declare class ListImageVersionsResponse extends SpeakeasyBase {
    imageVersions?: ImageVersion[];
    nextToken?: string;
}
