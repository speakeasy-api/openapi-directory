import { SpeakeasyBase } from "../../../internal/utils";
import { StackResourceDriftStatusEnum } from "./stackresourcedriftstatusenum";
export declare class DescribeStackResourceDriftsInput extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    stackName: string;
    stackResourceDriftStatusFilters?: StackResourceDriftStatusEnum[];
}
