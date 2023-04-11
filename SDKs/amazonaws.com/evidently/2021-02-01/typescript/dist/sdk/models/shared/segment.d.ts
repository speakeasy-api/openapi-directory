import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This structure contains information about one audience <i>segment</i>. You can use segments in your experiments and launches to narrow the user sessions used for experiment or launch to only the user sessions that match one or more criteria.
 */
export declare class Segment extends SpeakeasyBase {
    arn: string;
    createdTime: Date;
    description?: string;
    experimentCount?: number;
    lastUpdatedTime: Date;
    launchCount?: number;
    name: string;
    pattern: string;
    tags?: Record<string, string>;
}
