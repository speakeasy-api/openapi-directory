import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object specifying a stage.
 */
export declare class Stage extends SpeakeasyBase {
    activeSessionId?: string;
    arn: string;
    name?: string;
    tags?: Record<string, string>;
}
