import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class GetRunGroupResponse extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    id?: string;
    maxCpus?: number;
    maxDuration?: number;
    maxRuns?: number;
    name?: string;
    tags?: Record<string, string>;
}
