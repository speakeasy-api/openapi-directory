import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class ListMonitorEvaluationsRequest extends SpeakeasyBase {
    filters?: Filter[];
    maxResults?: number;
    monitorArn: string;
    nextToken?: string;
}
