import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This structure contains information about one group.
 */
export declare class Group extends SpeakeasyBase {
    arn?: string;
    createdTime?: Date;
    id?: string;
    lastModifiedTime?: Date;
    name?: string;
    tags?: Record<string, string>;
}
