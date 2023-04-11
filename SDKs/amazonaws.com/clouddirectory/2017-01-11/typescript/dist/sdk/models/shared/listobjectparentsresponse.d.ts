import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectIdentifierAndLinkNameTuple } from "./objectidentifierandlinknametuple";
/**
 * Success
 */
export declare class ListObjectParentsResponse extends SpeakeasyBase {
    nextToken?: string;
    parentLinks?: ObjectIdentifierAndLinkNameTuple[];
    parents?: Record<string, string>;
}
