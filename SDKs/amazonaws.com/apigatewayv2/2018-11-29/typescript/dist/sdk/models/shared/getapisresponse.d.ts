import { SpeakeasyBase } from "../../../internal/utils";
import { Api } from "./api";
/**
 * Success
 */
export declare class GetApisResponse extends SpeakeasyBase {
    items?: Api[];
    nextToken?: string;
}
