import { SpeakeasyBase } from "../../../internal/utils";
import { Authentication } from "./authentication";
/**
 * Success
 */
export declare class User extends SpeakeasyBase {
    arn?: string;
    accessString?: string;
    authentication?: Authentication;
    engine?: string;
    minimumEngineVersion?: string;
    status?: string;
    userGroupIds?: string[];
    userId?: string;
    userName?: string;
}
