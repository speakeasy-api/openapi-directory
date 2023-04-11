import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class GetAttributeGroupResponse extends SpeakeasyBase {
    arn?: string;
    attributes?: string;
    createdBy?: string;
    creationTime?: Date;
    description?: string;
    id?: string;
    lastUpdateTime?: Date;
    name?: string;
    tags?: Record<string, string>;
}
