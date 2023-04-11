import { SpeakeasyBase } from "../../../internal/utils";
import { HubContentTypeEnum } from "./hubcontenttypeenum";
export declare class DescribeHubContentRequest extends SpeakeasyBase {
    hubContentName: string;
    hubContentType: HubContentTypeEnum;
    hubContentVersion?: string;
    hubName: string;
}
