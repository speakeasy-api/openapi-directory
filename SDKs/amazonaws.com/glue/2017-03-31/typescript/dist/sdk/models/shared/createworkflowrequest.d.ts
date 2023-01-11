import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateWorkflowRequest extends SpeakeasyBase {
    defaultRunProperties?: Record<string, string>;
    description?: string;
    maxConcurrentRuns?: number;
    name: string;
    tags?: Record<string, string>;
}
