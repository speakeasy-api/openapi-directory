import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTag } from "./resourcetag";
export declare class TagResourceRequest extends SpeakeasyBase {
    resourceArn: string;
    resourceTags: ResourceTag[];
}
