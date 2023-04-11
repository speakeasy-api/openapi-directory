import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class CreateSecurityGroupResultTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Success
 */
export declare class CreateSecurityGroupResult extends SpeakeasyBase {
    groupId?: string;
    tags?: CreateSecurityGroupResultTags[];
}
