import { SpeakeasyBase } from "../../../internal/utils";
import { ReviewableHITStatusEnum } from "./reviewablehitstatusenum";
export declare class ListReviewableHITsRequest extends SpeakeasyBase {
    hitTypeId?: string;
    maxResults?: number;
    nextToken?: string;
    status?: ReviewableHITStatusEnum;
}
