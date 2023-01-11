import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateWorkflowRequest extends SpeakeasyBase {
    defaultRunProperties?: Record<string, string>;
    description?: string;
    maxConcurrentRuns?: number;
    name: string;
}
